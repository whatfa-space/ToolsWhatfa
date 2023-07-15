'use client'

import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { PhotoProvider } from 'react-image-previewer'

export default function ClientProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <PhotoProvider>{children}</PhotoProvider>
    </ThemeProvider>
  )
}
