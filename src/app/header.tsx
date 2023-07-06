'use client'

import { ThemeSwitch } from '@/components/common/theme-switch'
import {
  useEffect, useMemo, useRef, useState,
} from 'react'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log('observer')

        if (!headerRef.current) return
        console.log('entry.isIntersecting', entry.isIntersecting)
        setIsSticky(!entry.isIntersecting)
        console.log('observer end')
      })
    })
    if (!headerRef.current) return

    observer.observe(headerRef.current)

    return () => {
      if (!headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])
  const headerClass = useMemo(() => (isSticky ? '  [backdrop-filter:saturate(180%)_blur(20px)] border-b' : ''),
    [isSticky])
  return (
    <>
      <header className={`${headerClass} transform-gpu px-6 py-2  flex items-center justify-between sticky top-0 z-50 `}>
        <div className='  text-xl md:text-2xl flex-1 text-center'>ToolsWhatfa - 免费工具</div>
        <ThemeSwitch />
      </header>
      <div ref={headerRef} ></div>
    </>
  )
}