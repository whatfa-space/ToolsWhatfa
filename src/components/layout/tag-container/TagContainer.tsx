import { TIcon } from '@/interface/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, PropsWithChildren } from 'react'
import * as Fa from '@fortawesome/free-solid-svg-icons'

interface ITagContainerProps {
  icon: TIcon
  title: string
  className?: string
}
export const TagContainer: FC<PropsWithChildren<ITagContainerProps>> = ({
  children, title, icon, className = '',
}) => {
  const containIcon = Fa[icon]
  return (
    <div className={`w-full  border border-neutral-content  mt-10 py-7 px-4 rounded-md  shadow-sm ${className}`}>
      <div className="py-1 px-3 absolute -mt-12 bg-base-100 border rounded-md text-base-content flex items-center">
        <FontAwesomeIcon
          className="shrink-0"
          icon={containIcon}
          width={16}
          height={16}
        />
        <span className="shrink-0 ml-1">{title}</span>
      </div>
      {children}
    </div>
  )
}