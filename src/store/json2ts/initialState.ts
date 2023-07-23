export enum QRcodeType {
  BASE64 = 0,
  // URL = 1,
}
// export interface IState {
//   /** 图片 */
//   data: string
//   type: QRcodeType
//   /** 原内容 */
//   content: string
// }
export interface IState {
  lastJson: string
}
export const initialState: IState = {
  lastJson: '',
}
