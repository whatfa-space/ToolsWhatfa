import { env } from '@/config/env'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis as UpstashRedis } from '@upstash/redis/nodejs'
// import Redis from 'ioredis'
import { createClient } from 'redis'

export const upstashRedis = new UpstashRedis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
})

// Create a new ratelimiter, that allows 30 requests per 10 seconds
export const ratelimit = new Ratelimit({
  redis: upstashRedis,
  limiter: Ratelimit.slidingWindow(30, '10 s'),
  analytics: true,
})

export const redis = createClient()

redis.on('error', (err: any) => console.log('Redis Client Error', err))

redis.connect()
