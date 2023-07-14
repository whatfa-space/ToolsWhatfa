import { TIcon } from '@/interface/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, PropsWithChildren } from 'react'
import * as Fa from '@fortawesome/free-solid-svg-icons'

interface ITagContainerProps {
  icon?: TIcon
  title: string
  className?: string
  iconClass?: string
}
export const TagContainer: FC<PropsWithChildren<ITagContainerProps>> = ({
  children, title, icon, className = '', iconClass = '',
}) => {
  const containIcon = icon ? Fa[icon] : null
  return (
    <div className={`w-full  border border-zinc-200/80  mt-10 py-7 px-4 rounded-md  shadow-sm bg-base-100 ${className}`}>
      <div className="py-1 px-3 absolute -mt-12 bg-base-100 border border-zinc-200/80 rounded-md text-base-content flex items-center">
        {
          containIcon && <FontAwesomeIcon
            className={`shrink-0 ${iconClass}`}
            icon={containIcon}
            width={16}
            height={16}
          />
        }
        <span className="shrink-0 ml-1">{title}</span>
      </div>
      {children}
    </div>
  )
}