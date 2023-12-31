/** ES */
export interface IEsSearch<T> {
  took: number
  timed_out: boolean
  _shards: _shards
  hits: Hits<T>
}
interface _shards {
  total: number
  successful: number
  skipped: number
  failed: number
}
interface Hits<T> {
  total: Total
  max_score: number
  hits: HitsItem<T>[]
}
interface Total {
  value: number
  relation: string
}
interface HitsItem<T> {
  _index: string
  _type: string
  _id: string
  _score: number
  _source: T
}
/** pan */
export interface IPanSource {
  title: string
  url: string
  resource: Resource
}
interface Resource {
  links: string[]
  codes: string[]
}
