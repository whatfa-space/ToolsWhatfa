import ClipboardTip from '@/components/biz/clipboard-tip'
import Line from '@/components/biz/line/Line'
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
      <TagContainer title="在线剪切板" icon="faClipboard">
        {children}
        <Line className="mt-9" />
        <ClipboardTip />
      </TagContainer>
    </>
  )
}
