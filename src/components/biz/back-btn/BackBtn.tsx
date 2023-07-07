import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { HTMLAttributes, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export const BackBtn = ({ className, ...setup }: HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter()
  const handleBack = useCallback(() => {
    router.back()
  }, [router])
  return (
    <div
      className={`btn btn-circle btn-outline border-zinc-200/80 btn-sm text-sm ${className}`}
      onClick={handleBack}
      {...setup}
    >
      <FontAwesomeIcon icon={faArrowLeft} width={14} height={14} />
    </div>
  )
}