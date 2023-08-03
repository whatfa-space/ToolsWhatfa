import { http } from '@/lib/fetch'

const { GET } = http

export function getReaction(id: string) {
  return GET('/api/reaction', { params: { id } })
}
