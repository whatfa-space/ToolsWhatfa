import localforage from 'localforage'

const initQrcodeForage = () => {
  return localforage.createInstance({
    name: 'qrcode',
    driver: localforage.INDEXEDDB,
  })
}

let qrcodeForage: LocalForage | null = null

export const getQrcodeForage = () => {
  if (typeof window === 'undefined') {
    return null
  }
  if (qrcodeForage !== null) return qrcodeForage
  qrcodeForage = initQrcodeForage()
  return qrcodeForage
}
