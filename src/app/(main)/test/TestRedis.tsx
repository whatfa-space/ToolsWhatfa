// 'use client'
import { env } from '@/config/env'
import { redis } from '@/lib/redis'
import { useCallback, useState } from 'react'

const TestRedis = () => {
  // const data = await redis.set('foo', 'bar');
  // const member =  redis.srandmember<string>('nextjs13')
  const { UPSTASH_REDIS_REST_URL } = env
  const [count, setCount] = useState(0)
  const handleIncr = useCallback(() => {
    redis.incr('like').then((val) => {
      setCount(val)
    })
  }, [])

  return (
    <div>
      redis Welcome {count}
      {UPSTASH_REDIS_REST_URL}
      <div>test</div>
      <button className="btn" onClick={handleIncr}>
        like
      </button>
    </div>
  )
}
export default TestRedis
