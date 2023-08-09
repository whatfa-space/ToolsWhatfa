export enum QRcodeType {
  BASE64 = 0,
  // URL = 1,
}
export interface QRcodeRecord {
  /** 图片 */
  // data: string
  type: QRcodeType
  /** 原内容 */
  content: string
  id: string
}
export interface QRcodeState {
  history: QRcodeRecord[]
}
export const initialState: QRcodeState = {
  history: [],
}
