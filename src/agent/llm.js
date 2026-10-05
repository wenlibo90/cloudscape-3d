export async function requestAgent(message, history = []) {
  const res = await fetch('/api/agent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
  });
  if (!res.ok) throw new Error(`agent responded ${res.status}`);
  return res.json();
}

export async function checkHealth() {
  try {
    const res = await fetch('/api/health', { method: 'GET' });
    if (!res.ok) return false;
    const data = await res.json();
    return Boolean(data && data.llmConfigured);
  } catch {
    return false;
  }
}
