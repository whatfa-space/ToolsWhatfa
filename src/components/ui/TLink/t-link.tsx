import { clsxm } from '@/lib/helper/clsx'
import Link, { LinkProps } from 'next/link'
import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type TLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
LinkProps &
PropsWithChildren;

export default function TLink({ children, className, ...rest }: TLinkProps) {
  return (
    <>
      <Link
        className={clsxm(
          'text-info relative before:content-[""] before:absolute before:w-0 before:bg-info before:h-[2px] before:bottom-0  hover:before:w-full  before:transition-all  before:duration-300 before:rounded',
          className,
        )}
        {...rest}
      >
        {children}
      </Link>
    </>
  )
}
