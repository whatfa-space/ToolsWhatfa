'use client'
import { useJitsu } from '@jitsu/jitsu-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const useJitsuPage = () => {
  const { analytics } = useJitsu()
  const pathName = usePathname()
  useEffect(() => {
    analytics.page()
  }, [pathName])
}
