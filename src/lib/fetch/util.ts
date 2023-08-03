export function buildUrlWithParams(
  url: string,
  params: Record<string, number | string | boolean>
) {
  let queryString = ''
  if (params) {
    const keys = Object.keys(params)
    if (keys.length > 0) {
      queryString =
        '?' +
        keys
          .map(
            (key) =>
              encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
          )
          .join('&')
    }
  }
  return url + queryString
}
