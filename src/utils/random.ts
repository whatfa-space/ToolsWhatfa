/**
 * 生成长度为 n 的随机字母和数字组成的字符串
 * @param {number} n - 字符串长度
 * @returns {string} - 生成的随机字符串
 */
export function generateRandomString(n: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  const charactersLength = characters.length

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength)
    randomString += characters.charAt(randomIndex)
  }

  return randomString
}
