import { http } from '@/lib/fetch'

const { GET, PATCH } = http

const url = '/api/reaction'
export interface Reactions {
  key: string
  count: number
}

export function getReaction(id: string) {
  return GET<Reactions>(url, { params: { id } })
}
export function reaction(id: string) {
  return PATCH<Reactions>(url, { params: { id } })
}
