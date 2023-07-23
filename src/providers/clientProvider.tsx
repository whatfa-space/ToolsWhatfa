'use client'

import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { PhotoProvider } from 'react-image-previewer'
import { useIsClient } from '@/hooks/common/useIsClient'

export default function ClientProvider({ children }: PropsWithChildren) {
  const { isClient } = useIsClient()
  if (!isClient) return <>{children}</>
  return (
    <ThemeProvider>
      <PhotoProvider>{children}</PhotoProvider>
    </ThemeProvider>
  )
}
