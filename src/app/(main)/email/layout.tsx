// import ClipboardTip from '@/components/biz/clipboard-tip'
import Line from '@/components/biz/line/Line'
import Reactions from '@/components/biz/reactions'
import { TagContainer } from '@/components/layout/tag-container'
import { getReaction, Reactions as ReactionsRes } from '@/services/reactions'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: '在线免费临时邮箱 - tools whatfa ',
  description: '在线免费临时邮箱、邮件 - tools whatfa',
  keywords: '在线免费临时邮箱, Free temporary mailbox online',
}

export default async function Layout({ children }: PropsWithChildren) {
  let data: ReactionsRes = { count: 0, key: '' }
  try {
    data = await getReaction('email')
  } catch (err) {
    console.log('layout getReaction', err)
  }
  return (
    <>
      <TagContainer title="在线免费临时邮箱" icon="faVoicemail">
        <Reactions id="email" count={data.count} />
        {children}
        <Line className="mt-9" />
        {/* <ClipboardTip /> */}
      </TagContainer>
    </>
  )
}
