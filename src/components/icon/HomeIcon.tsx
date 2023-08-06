import { SVGProps } from 'react'

export function HomeIcon({ className, ...reset }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={`w-6 h-6 text-gray-800 dark:text-white ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...reset}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
      />
    </svg>
  )
}
