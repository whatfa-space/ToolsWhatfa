import { TagContainer } from '@/components/layout/tag-container'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: '在线剪切板 - tools whatfa ',
  description: '在线剪切板 内容跨端分享- tools whatfa',
  keywords: '在线剪切板 内容跨端分享, clipboard online , clipboard share',
}

export default function Clipboard({ children }: PropsWithChildren) {
  return (
    <>
      <TagContainer title="在线剪切板(开发中)" icon="faClipboard">
        {children}
      </TagContainer>
    </>
  )
}
