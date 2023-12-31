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
  extract: boolean
}>

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'
type Params = Record<string, string | number | boolean>

// interface GetOpt {
//   params?: Params
// }
type GetOpt = Omit<RequestOption, 'method' | 'data'>
// type PostOpt = GetOpt & {
//   data: any
// }
type PostOpt = Omit<RequestOption, 'method'>

export class Http {
  opt: RequestOption | null = null
  constructor(opt: RequestOption) {
    this.opt = opt
  }
  request = <T>(url: string, opt: RequestOption): Promise<T> => {
    const _opt = { ...this.opt, ...opt }
    const { params, method, data, host, interceptors, extract = true } = _opt
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

      let responseData: any = resData
      if (response) {
        responseData = await response(resData)
      }
      if (extract) {
        return responseData?.data
      }

      return responseData
    })
  }
  PATCH = <T>(url: string, { params }: GetOpt) => {
    return this.request<T>(url, {
      params,
      method: 'PATCH',
    })
  }
  POST = <T>(url: string, opt: PostOpt) => {
    return this.request<T>(url, {
      method: 'POST',
      ...opt,
    })
  }
  GET = <T>(url: string, opt?: GetOpt) => {
    return this.request<T>(url, {
      method: 'GET',
      ...opt,
    })
  }
  DELETE = () => {}
}
