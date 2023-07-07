'use client'

import {
  useEffect, useMemo, useRef, useState,
} from 'react'
import { BackBtn } from '@/components/biz/back-btn'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathName = usePathname()
  const [isSticky, setIsSticky] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = headerRef.current
    if (!cur) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log('observer')
        console.log('entry.isIntersecting', entry.isIntersecting)
        setIsSticky(!entry.isIntersecting)
        console.log('observer end')
      })
    })
    observer.observe(headerRef.current)

    return () => {
      observer.unobserve(cur)
    }
  }, [headerRef])

  const showBackBtn = useMemo(() => {
    return pathName !== '/'
  }, [pathName])

  const headerClass = useMemo(() => (
    isSticky ? '  [backdrop-filter:saturate(180%)_blur(20px)] border-b' : ''),
  [isSticky])

  return (
    <>
      <header className={`${headerClass} w-full transform-gpu px-6 py-2  flex items-center justify-between fixed top-0 z-50 `}>
        {showBackBtn && <BackBtn />}
        <div className='text-xl md:text-2xl flex-1 text-center'>ToolsWhatfa - 免费工具</div>
      </header>
      <div ref={headerRef} ></div>
    </>
  )
}