import * as Fa from '@fortawesome/free-solid-svg-icons'

export type TIcon = Exclude<Exclude<keyof typeof Fa, 'prefix'>, 'fas'>
export interface ITool {
  title: string
  desc: string
  icon: TIcon
  link?: string
}
export interface IToolsPanel {
  title: string
  icon: TIcon
  tools: ITool[]
}
