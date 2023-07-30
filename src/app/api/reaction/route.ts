import { redis } from '@/lib/redis'
import { fail, success } from '@/utils/response'
import { NextRequest } from 'next/server'

function getKey(id: string) {
  return `reactions:${id}`
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return fail('missing param id')
  }
  const key = getKey(id)
  const count = (await redis.get<number>(key)) || 0

  return success({ key, count })
}

export async function PATCH(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return fail('missing param id')
  }
  const key = getKey(id)
  const count = await redis.incr(key)
  return success({ key, count })
}
