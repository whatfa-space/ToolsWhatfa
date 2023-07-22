import { TIcon } from '@/interface/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Fa from '@fortawesome/free-solid-svg-icons'

interface IFaIconProps {
  icon?: TIcon
  className?: string
}
export function FaIcon({ icon, className }: IFaIconProps) {
  const containIcon = icon ? Fa[icon] : null
  return (
    <>
      {containIcon && (
        <FontAwesomeIcon className={className} icon={containIcon} />
      )}
    </>
  )
}
