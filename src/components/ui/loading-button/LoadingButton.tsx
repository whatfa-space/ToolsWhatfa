'use client'

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  memo,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren & {
    onSubmit?: () => Promise<any>
  }

const LoadingButton = ({
  onSubmit,
  className = '',
  children,
  ...rest
}: Props) => {
  const [loading, setLoading] = useState(false)
  const handleClick = useCallback(() => {
    if (loading) return
    setLoading(true)
    onSubmit?.().finally(() => {
      setTimeout(() => {
        setLoading(false)
      }, 700)
    })
  }, [onSubmit, loading])
  return (
    <button
      onClick={handleClick}
      className={`btn btn-outline btn-sm ${className}`}
      {...rest}
    >
      <div className="flex items-center">
        <span
          className={`loading loading-spinner loading-xs transition-all duration-700 ${
            loading ? 'opacity-100 mr-1' : 'opacity-0 w-0'
          }`}
        />
        <div>{children}</div>
      </div>
    </button>
  )
}

export default memo(LoadingButton)
