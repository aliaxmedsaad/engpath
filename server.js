const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '1mb' }));

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
}));

// Simple rate limiting: max 10 requests per IP per minute
const requests = new Map();
function rateLimit(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const window = 60_000;
  const max = 10;

  const hits = (requests.get(ip) || []).filter(t => now - t < window);
  if (hits.length >= max) {
    return res.status(429).json({ error: 'Too many requests — please wait a moment.' });
  }
  hits.push(now);
  requests.set(ip, hits);
  next();
}

// Health check
app.get('/', (req, res) => res.json({ status: 'EngPath API is running' }));

// Proxy endpoint — receives a prompt, calls Gemini, returns the text
app.post('/api/map', rateLimit, async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured on server.' });
  }

  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Invalid request body — expected { prompt: string }.' });
  }
  if (prompt.length > 25_000) {
    return res.status(413).json({ error: 'Prompt is too large. Please shorten the project reflection.' });
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

    console.log('===== GEMINI DEBUG =====');
    console.log('Endpoint:', endpoint);
    console.log('Model:', MODEL);
    console.log('API key present:', !!process.env.GEMINI_API_KEY);
    console.log('API key length:', process.env.GEMINI_API_KEY?.length);
    console.log('Using x-goog-api-key header:', true);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);
    const response = await fetch(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY,
        },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 4096,
            responseMimeType: 'application/json',
          },
        }),
      }
    );
    clearTimeout(timeout);

    console.log('Gemini HTTP status:', response.status);

    const raw = await response.text();
    console.log('Gemini response body:', raw.slice(0, 500));

    let data;
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch (err) {
      console.error('Gemini returned non-JSON response:', raw.slice(0, 500));
      return res.status(502).json({ error: 'Gemini returned an unexpected response.' });
    }

    if (!response.ok) {
      console.error('Gemini error:', data.error || data);
      return res.status(response.status).json({ error: data.error?.message || 'Gemini API error' });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!text) {
      const finishReason = data.candidates?.[0]?.finishReason;
      return res.status(502).json({ error: `Gemini returned no text${finishReason ? ` (${finishReason})` : ''}.` });
    }
    res.json({ text });

  } catch (err) {
    console.error('Server error:', err);
    const status = err.name === 'AbortError' ? 504 : 500;
    res.status(status).json({ error: 'Server error — please try again.' });
  }
});

app.listen(PORT, () => console.log(`EngPath backend running on port ${PORT}`));
