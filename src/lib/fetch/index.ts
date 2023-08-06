import { Http } from './http'

const requestOpt = {
  host: !global.window
    ? process.env.NODE_ENV === 'production'
      ? 'https://tools.whatfa.com'
      : 'http:localhost:3000'
    : '',
}

const http = new Http(requestOpt)

export { http }
