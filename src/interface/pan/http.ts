import { IPan } from './common'

export interface ISearchRes {
  panList: IPan[]
  keywords: string
  page: number
  totalPage: number
  total: number
}
