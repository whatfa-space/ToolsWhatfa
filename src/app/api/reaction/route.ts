import { ratelimit, redis } from '@/lib/redis'
import { Fail, Success } from '@/utils/response'
import { NextRequest } from 'next/server'

function getKey(id: string) {
  return `reactions:${id}`
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return Fail('missing param id')
  }
  const key = getKey(id)

  const { success } = await ratelimit.limit(getKey(id) + `_${req.ip ?? ''}`)
  if (!success) {
    return Fail('Too Many Requests')
    //  new Response('Too Many Requests', {
    //   status: 429,
    // })
  }

  const count = (await redis.get<number>(key)) || 0

  return Success({ key, count })
}

export async function PATCH(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return Fail('missing param id')
  }
  const key = getKey(id)

  const { success } = await ratelimit.limit(getKey(id) + `_${req.ip ?? ''}`)
  if (!success) {
    return Fail('Too Many Requests')
  }

  const count = await redis.incr(key)
  return Success({ key, count })
}
