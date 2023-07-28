import { clsxm } from '@/lib/helper/clsx'
import Link, { LinkProps } from 'next/link'
import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react'

interface IProps {
  underline?: boolean
}

type TLinkProps = IProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  PropsWithChildren

export default function TLink({
  underline = true,
  children,
  className,
  ...rest
}: TLinkProps) {
  return (
    <>
      <Link
        className={clsxm(
          'text-info transition-all relative before:bottom-0  hover:before:w-full hover:scale-110',
          underline
            ? ' before:absolute before:content-[""] before:w-0 before:bg-info before:h-[2px] before:duration-300 before:rounded before:transition-all'
            : '',
          className
        )}
        {...rest}
      >
        {children}
      </Link>
    </>
  )
}
