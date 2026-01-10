import Redis from 'ioredis';

// Redis Cloud client using REDIS_URL from Vercel marketplace integration
// Falls back gracefully if Redis is not configured
let redis: Redis | null = null;

try {
  if (process.env.REDIS_URL) {
    redis = new Redis(process.env.REDIS_URL);
  }
} catch (error) {
  console.warn('Redis connection failed, using in-memory fallback');
}

export default redis;

// In-memory fallback for development without Redis
const memoryStore: Record<string, string> = {};

export async function getValue(key: string): Promise<string | null> {
  if (redis) {
    return redis.get(key);
  }
  return memoryStore[key] || null;
}

export async function setValue(key: string, value: string): Promise<void> {
  if (redis) {
    await redis.set(key, value);
  } else {
    memoryStore[key] = value;
  }
}
