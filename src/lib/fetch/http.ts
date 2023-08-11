import { buildUrlWithParams } from './util'

interface Interceptors {
  response: <T>(res: T) => Promise<T>
}

export type RequestOption = Partial<{
  host: string
  params: Params
  method: Method
  data: any
  interceptors: Interceptors
}>

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'
type Params = Record<string, string | number | boolean>

interface GetOpt {
  params: Params
}
type PostOpt = GetOpt & {
  data: any
}
export class Http {
  opt: RequestOption | null = null
  constructor(opt: RequestOption) {
    this.opt = opt
  }
  request = <T>(url: string, opt: RequestOption): Promise<T> => {
    const _opt = { ...this.opt, ...opt }
    const { params, method, data, host, interceptors } = _opt
    const { response } = interceptors || {}
    const _url = params ? buildUrlWithParams(host + url, params) : url

    return fetch(_url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      cache: 'no-store',
      body: data ? JSON.stringify(data) : undefined,
    }).then(async (res) => {
      const resData = await res.json()
      const { data } = resData
      if (response) return (await response(resData)).data
      return data
    })
  }
  PATCH = <T>(url: string, { params }: GetOpt) => {
    return this.request<T>(url, {
      params,
      method: 'PATCH',
    })
  }
  POST = (url: string, { data, params }: PostOpt) => {
    return this.request(url, {
      data,
      params,
    })
  }
  GET = <T>(url: string, { params }: GetOpt) => {
    return this.request<T>(url, {
      params,
    })
  }
  DELETE = () => {}
}
