import { buildUrlWithParams } from './util'

export type RequestOption = Partial<{
  host: string
  params: Params
  method: Method
  data: any
}>

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'
type Params = Record<string, string | number | boolean>

interface GetOpt {
  params: Params
}
export class Http {
  opt: RequestOption | null = null
  constructor(opt: RequestOption) {
    this.opt = opt
  }
  // method: 'POST',
  // cache: 'no-cache',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify({
  //   id,
  //   content,
  // }),
  request = (url: string, opt: RequestOption) => {
    const _opt = { ...this.opt, ...opt }
    const { params, method, data } = _opt
    const _url = params ? buildUrlWithParams(url, params) : url

    return fetch(_url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      cache: 'no-store',
      body: data ? JSON.stringify(data) : undefined,
    }).then(async (res) => {
      const { data } = await res.json()
      return data
    })
  }
  PATCH = () => {}
  POST = () => {}
  GET = (url: string, { params }: GetOpt) => {
    return this.request(url, {
      params,
    })
  }
  DELETE = () => {}
}
