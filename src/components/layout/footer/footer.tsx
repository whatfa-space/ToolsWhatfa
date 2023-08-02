import { ThemeSwitch } from '@/components/common/theme-switch'
import Link from 'next/link'
import Contact from './Contact'

export const Footer = () => (
  <footer className="p-6 border-t border-zinc-200/80 flex flex-col items-center">
    <div className="mb-3">
      © 2020-2023 &nbsp;
      <Link
        href="https://tools.whatfa.com"
        target="_blank"
        className="underline underline-offset-4"
      >
        tools.whatfa.com
      </Link>
    </div>
    <div className="flex">
      <Contact />
      <ThemeSwitch />
    </div>
  </footer>
)
