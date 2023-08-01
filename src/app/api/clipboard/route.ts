import { redis } from '@/lib/redis'
import { days2Seconds, Fail, Success } from '@/utils'
import { NextRequest } from 'next/server'

const getKey = (clipboardId: string) => {
  return `clipboard:${clipboardId}`
}
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return Fail('missing id')
  }
  const key = getKey(id)
  const content = (await redis.get<string>(key)) || ''
  return Success({ content, id })
}

interface Body {
  content: string
  id: string
}

export async function POST(req: NextRequest) {
  const { content = '', id }: Body = await req.json()
  if (!id) {
    return Fail('missing id')
  }
  const key = getKey(id)
  const res = await redis.set<string>(key, content, {
    ex: days2Seconds(2),
  })
  if (res !== 'OK') {
    Fail('save error')
  }

  return Success({ content, id: id })
}
