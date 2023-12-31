import { ISearchRes } from '@/interface/pan/http'
import { http } from '@/lib/fetch'

const { GET } = http

const url = '/api/pan'

export function searchPan(keywords: string, page: number, size = 10) {
  return GET<ISearchRes>(url, { params: { keywords, page, size } })
}
