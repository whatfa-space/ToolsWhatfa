'use client'

import { useQRcodeStore } from '@/store/qrcode'
import Image from 'next/image'
import { PhotoView } from 'react-image-previewer'

export default function History() {
  const history = useQRcodeStore((state) => state.history)
  return (
    <div>
      {history.map((record) => (
        <div key={record.data}>
          <PhotoView src={record.data}>
            <Image
              className="cursor-pointer"
              src={record.data}
              width={100}
              height={100}
              alt=""
            />
          </PhotoView>
          <div>{record.content}</div>
        </div>
      ))}
    </div>
  )
}
