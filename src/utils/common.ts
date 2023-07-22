// 转驼峰式函数
export function toCamelCase(obj: any): any {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => toCamelCase(item))
  }

  const camelCased: any = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelKey = key.replace(/_([a-z])/g, (_, p1) => p1.toUpperCase())
      camelCased[camelKey] = toCamelCase(obj[key])
    }
  }
  return camelCased
}

// 转下划线式函数
export function toSnakeCase(obj: any): any {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => toSnakeCase(item))
  }

  const snakeCased: any = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = key.replace(
        /[A-Z]/g,
        (match) => `_${match.toLowerCase()}`
      )
      snakeCased[snakeKey] = toSnakeCase(obj[key])
    }
  }
  return snakeCased
}
