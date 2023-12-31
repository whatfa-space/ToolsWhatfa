import { IEsSearch, IPanSource } from '@/interface/pan/es'
import { ISearchRes } from '@/interface/pan/http'
import { http } from '@/lib/fetch'
import { Fail, Success } from '@/utils'
import { NextRequest } from 'next/server'

const { POST: post } = http

const searchEsUrl = 'http://localhost:9200/pan/_search'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const keywords = searchParams.get('keywords')
  const page = Number(searchParams.get('page')) || 1
  const size = Number(searchParams.get('size')) || 10
  if (!keywords) {
    return Fail('missing keywords')
  }

  const esSearchRes = await post<IEsSearch<IPanSource>>(searchEsUrl, {
    data: {
      from: (page - 1) * size,
      size: size,
      query: {
        match: {
          title: keywords,
        },
      },
    },
    extract: false,
  })
  const panList = esSearchRes.hits.hits.map(({ _source }) => ({
    title: _source.title,
    code: _source.resource.codes[0],
    url: _source.resource.links[0],
  }))
  const total = esSearchRes.hits.total.value
  const totalPage = Math.ceil(total / size)

  esSearchRes.hits.hits.forEach((item) => console.log(item._source))

  return Success<ISearchRes>({ panList, keywords, page, totalPage, total })
}
