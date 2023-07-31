import { FC, memo } from 'react'
import * as Fa from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TIcon } from '@/interface/tools'
import Link from 'next/link'

interface IToolCard {
  icon: TIcon
  title: string
  desc: string
  link?: string
}
const ToolCard: FC<IToolCard> = ({ icon, title, desc, link }) => {
  const iconC = Fa[icon]
  return (
    <Link href={link || ''}>
      <div className="flex items-center border border-zinc-200/80 bg-base-100 p-3 pl-1 rounded-md hover:shadow-md active:bg-base-200 cursor-pointer transition-shadow duration-300">
        <FontAwesomeIcon
          className="shrink-0 m-1"
          icon={iconC}
          width={16}
          height={16}
        />
        <div className="flex flex-col">
          <h2 className="text-sm">{title}</h2>
          <p className="text-xs">{desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default memo(ToolCard)
