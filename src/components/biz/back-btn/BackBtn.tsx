import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { HTMLAttributes } from 'react'

export const BackBtn = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`btn btn-circle btn-outline border-zinc-200/80 btn-sm text-sm ${className}`}
      {...rest}
    >
      <FontAwesomeIcon icon={faArrowLeft} width={14} height={14} />
    </div>
  )
}
