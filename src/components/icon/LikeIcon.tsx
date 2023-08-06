import { clsxm } from '@/lib/helper/clsx'
import { SVGProps } from 'react'

export function LikeIcon({ className, ...reset }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6192"
      className={clsxm('w-6 h-6', className)}
      {...reset}
    >
      <path
        d="M128 384h170.666667v448a42.666667 42.666667 0 0 1-42.666667 42.666667H128V384z"
        fill="#2196F3"
        p-id="6193"
      ></path>
      <path
        d="M298.666667 832V384l234.666666-64h277.333334a85.333333 85.333333 0 0 1 85.333333 85.333333v135.466667a87.466667 87.466667 0 0 1-4.266667 26.88l-68.48 205.866667a85.333333 85.333333 0 0 1-81.066666 58.453333z"
        fill="#FFB74D"
        p-id="6194"
      ></path>
      <path
        d="M490.666667 448l-192-64 170.666666-320 21.333334 6.826667a115.413333 115.413333 0 0 1 73.6 143.786666z"
        fill="#FFB74D"
        p-id="6195"
      ></path>
    </svg>
  )
}
