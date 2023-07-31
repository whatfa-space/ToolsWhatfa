import { env } from '@/config/env'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis/nodejs'

export const redis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
})

// Create a new ratelimiter, that allows 30 requests per 10 seconds
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, '10 s'),
  analytics: true,
})
