import ClipboardTip from '@/components/biz/clipboard-tip'
import Line from '@/components/biz/line/Line'
import Reactions from '@/components/biz/reactions'
import { TagContainer } from '@/components/layout/tag-container'
import { getReaction, Reactions as ReactionsRes } from '@/services/reactions'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: '在线剪切板 - tools whatfa ',
  description: '在线剪切板 内容跨端分享- tools whatfa',
  keywords:
    '在线剪切板 内容跨端分享, 网络剪切板， 共享剪切板, clipboard online , clipboard share',
}

export default async function Clipboard({ children }: PropsWithChildren) {
  let data: ReactionsRes = { count: 0, key: '' }
  try {
    data = await getReaction('clipboard')
  } catch (err) {
    console.log('layout getReaction', err)
  }
  return (
    <>
      <TagContainer title="在线剪切板" icon="faClipboard">
        <Reactions id="clipboard" count={data.count} />
        {children}
        <Line className="mt-9" />
        <ClipboardTip />
      </TagContainer>
    </>
  )
}
