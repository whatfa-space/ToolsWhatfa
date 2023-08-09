import { Http } from './http'

const requestOpt = {
  host:
    typeof window === 'undefined'
      ? process.env.NODE_ENV === 'production'
        ? 'https://tools.whatfa.com'
        : 'http:localhost:3000'
      : '',
}

console.log(
  'use---',
  typeof window === 'undefined'
    ? process.env.NODE_ENV === 'production'
      ? 'https://tools.whatfa.com'
      : 'http:localhost:3000'
    : ''
)

const http = new Http(requestOpt)

export { http }
