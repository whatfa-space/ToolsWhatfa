'use client'

import Line from '@/components/biz/line/Line'
import { getQrcodeForage } from '@/forage/qrcode'
import { QRcodeRecord, useQRcodeStore } from '@/store/qrcode'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PhotoView } from 'react-image-previewer'

type QrcodeItem = QRcodeRecord & {
  data: string
}

export default function History() {
  const [qrcodeList, setQrcodeList] = useState<QrcodeItem[]>([])
  const history = useQRcodeStore((state) => state.history)

  useEffect(() => {
    Promise.all(
      history.map(async (item) => {
        const data = (await getQrcodeForage()?.getItem<string>(item.id)) || ''
        return { ...item, data }
      })
    ).then((value) => {
      setQrcodeList(value)
    })
  }, [history])
  return (
    <div>
      {qrcodeList.map((record) => (
        <>
          <div className="flex">
            <PhotoView src={record.data}>
              <Image
                className="cursor-pointer"
                src={record.data}
                width={100}
                height={100}
                alt=""
              />
            </PhotoView>
            <div className="ml-1 flex-1">
              <span>{record.content}</span>
            </div>
          </div>
          <Line />
        </>
      ))}
      {qrcodeList.length <= 0 && <div>无历史记录</div>}
    </div>
  )
}
