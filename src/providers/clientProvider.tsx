'use client'

import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'

export default function ClientProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}