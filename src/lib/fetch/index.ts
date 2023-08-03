import { Http } from './http'

const requestOpt = {
  host:
    process.env.NODE_ENV === 'production'
      ? 'https://tools.whatfa.com'
      : 'http:localhost:3000',
}

const http = new Http(requestOpt)

export { http }
