// app/lib/rateLimit.js
//
// Simple in-memory rate limiter.
//
// NOTE ON LIMITATIONS: serverless functions can run on several instances at
// once, so this counter is per-instance rather than global. It stops casual
// bots and accidental double-submits, which is what we need today. If spam
// ever becomes a real problem, swap this for a shared store (Upstash Redis)
// without changing the call site.

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const hits = new Map();

export function checkRateLimit(key) {
  const now = Date.now();
  const record = hits.get(key);

  if (!record || now - record.start > WINDOW_MS) {
    hits.set(key, { start: now, count: 1 });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  record.count += 1;

  if (record.count > MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((record.start + WINDOW_MS - now) / 1000),
    };
  }

  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

// Keep the map from growing without bound on a long-lived instance.
export function pruneRateLimit() {
  const now = Date.now();
  for (const [key, record] of hits.entries()) {
    if (now - record.start > WINDOW_MS) hits.delete(key);
  }
}
