export function asyncWait(time: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
