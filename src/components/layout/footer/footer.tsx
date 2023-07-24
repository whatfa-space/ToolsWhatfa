import { ThemeSwitch } from '@/components/common/theme-switch'
import Link from 'next/link'

export const Footer = () => (
  <footer className="p-6 border-t border-zinc-200/80 flex flex-col items-center bg-red-300">
    <div className="mb-3">
      © 2020-2023
      <Link href="https://tools.whatfa.com" target="_blank">
        tools.whatfa.com
      </Link>
    </div>
    <ThemeSwitch />
  </footer>
)
