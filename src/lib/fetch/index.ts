import { Http, RequestOption } from './http'

const requestOpt: RequestOption = {
  host:
    typeof window === 'undefined'
      ? process.env.NODE_ENV === 'production'
        ? 'https://tools.whatfa.com'
        : 'http:localhost:3000'
      : '',
  interceptors: {
    response: async (res) => {
      console.log('interceptors  response', res)

      return res
    },
  },
}

const http = new Http(requestOpt)

export { http }
