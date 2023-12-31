import { toast } from 'react-toastify'
import { Http, RequestOption } from './http'

const clientInterceptor = (res: any) => {
  if (typeof window !== 'undefined') {
    if (res?.code !== 0) {
      toast.error(res?.message)
      throw new Error(res?.message)
    }
  }
}

const requestOpt: RequestOption = {
  host:
    typeof window === 'undefined'
      ? process.env.NODE_ENV === 'production'
        ? 'https://tools.whatfa.com'
        : 'http:localhost:3000'
      : '',
  interceptors: {
    response: async (res) => {
      // console.log('interceptors  response', res)
      clientInterceptor(res)

      return res
    },
  },
}

const http = new Http(requestOpt)

export { http }
