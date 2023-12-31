import { ISearchRes } from '@/interface/pan/http'
import { http } from '@/lib/fetch'

const { GET } = http

const url = '/api/pan'

export function searchPan(keywords: string, page: number) {
  return GET<ISearchRes>(url, { params: { keywords, page } })
}
