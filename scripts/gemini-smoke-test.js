const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash';

async function main() {
  if (!API_KEY) {
    console.log('FAILURE');
    process.exitCode = 1;
    return;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: MODEL,
        input: 'Reply with only the word OK.',
      }),
    });
    clearTimeout(timeout);

    if (!response.ok) {
      console.log('FAILURE');
      process.exitCode = 1;
      return;
    }

    const data = await response.json();
    const text = String(data.output_text || data.outputText || '').trim();
    console.log(text ? 'SUCCESS' : 'FAILURE');
    if (!text) process.exitCode = 1;
  } catch (err) {
    console.log('FAILURE');
    process.exitCode = 1;
  }
}

main();
