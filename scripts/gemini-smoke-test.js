const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

async function main() {
  if (!API_KEY) {
    console.log('FAILURE');
    process.exitCode = 1;
    return;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY,
        },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Reply with only the word OK.' }] }],
          generationConfig: { maxOutputTokens: 16, temperature: 0 },
        }),
      }
    );
    clearTimeout(timeout);

    if (!response.ok) {
      const err = await response.text();
      console.error('HTTP', response.status, err.slice(0, 200));
      console.log('FAILURE');
      process.exitCode = 1;
      return;
    }

    const data = await response.json();
    const text = (data.candidates?.[0]?.content?.parts?.[0]?.text || '').trim();
    console.log(text ? 'SUCCESS' : 'FAILURE');
    if (!text) process.exitCode = 1;
  } catch (err) {
    console.error(err.message);
    console.log('FAILURE');
    process.exitCode = 1;
  }
}

main();
