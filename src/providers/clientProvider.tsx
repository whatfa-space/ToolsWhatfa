'use client'

import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { PhotoProvider } from 'react-image-previewer'
import { JitsuProvider } from '@jitsu/jitsu-react'
// import { useIsClient } from '@/hooks/common/useIsClient'

export default function ClientProvider({ children }: PropsWithChildren) {
  // const { isClient } = useIsClient()
  // if (!isClient) return <>{children}</>
  return (
    <ThemeProvider>
      <JitsuProvider
        options={{ host: 'https://clkxi4mik00003b6raazaj1l8.d.jitsu.com' }}
      >
        <PhotoProvider>{children}</PhotoProvider>
      </JitsuProvider>
    </ThemeProvider>
  )
}
