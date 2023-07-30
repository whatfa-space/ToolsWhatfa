import { TagContainer } from '@/components/layout/tag-container'
import { Metadata } from 'next'
// import History from './history'
import CodeImgGen from './QRcodeGen'

export const metadata: Metadata = {
  title: '二维码生成 - tools whatfa ',
  description: '二维码生成 链接转二维码 - tools whatfa',
  keywords:
    '二维码生成, 二维码链接, 二维码, 二维码生成链接, 链接生成二维码, qrcode generate, link to qrcode',
}

export default function JsonFormat() {
  return (
    <>
      <TagContainer title="二维码生成" icon="faQrcode">
        <CodeImgGen />
      </TagContainer>
      {/* <TagContainer title='历史' icon='faClockRotateLeft'>
        <History/>
      </TagContainer> */}
    </>
  )
}
