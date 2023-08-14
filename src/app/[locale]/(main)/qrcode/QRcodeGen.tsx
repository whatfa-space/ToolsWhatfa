'use client'

import { getInputValue } from '@/utils'
import Image from 'next/image'
import QrCodeWithLogo2 from 'qr-code-with-logo'

import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import { PhotoSlider } from 'react-image-previewer'
import { QRcodeType, useQRcodeStore } from '@/store/qrcode'
import { getQrcodeForage } from '@/forage/qrcode'

const initUrlText = 'https://tools.whatfa.com/'

export const QRcodeGen = () => {
  const [inputText, setInputText] = useState(initUrlText)
  const [text, setText] = useState(initUrlText)
  const [loading, setLoading] = useState(true)
  const codeImgRef = useRef<HTMLImageElement>(null)

  const addRecord = useQRcodeStore((state) => state.addRecord)

  const getCode = () => {
    if (codeImgRef.current?.src) {
      return codeImgRef.current.src
    }
    return ''
  }

  const handleInput = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setInputText(value)
  }, [])

  const handleBind = useCallback(
    (opt?: any) => {
      return QrCodeWithLogo2.toImage({
        image: codeImgRef.current,
        nodeQrCodeOptions: {
          margin: 1,
        },
        content: text,
        width: 380,
        ...opt,
      })
    },
    [text]
  )

  const handleGen = debounce(
    () => {
      setText(inputText)
      setTimeout(async () => {
        const code = getCode()
        // type: QRcodeType
        // /** 原内容 */
        // content: string
        // id: string
        const id = new Date().getTime().toString()
        await getQrcodeForage()?.setItem(id, code)
        addRecord({
          type: QRcodeType.BASE64,
          content: inputText,
          id,
        })
      }, 1000)
      console.log('handleGen')
    },
    300,
    {
      leading: true,
    }
  )

  const handleDownload = () => {
    handleBind({
      download: true,
      downloadName: 'qrcode.png',
    })
  }

  useEffect(() => {
    handleBind({}).then(() => setLoading(false))
  }, [handleBind])

  const [visible, setVisible] = useState(false)
  const [previewImgs, setPreviewImgs] = useState<string[]>([])

  const handlePreview = () => {
    const qrcode = getCode()
    setPreviewImgs([getCode()])
    if (qrcode) {
      setVisible(true)
    }
  }

  return (
    <div className="flex flex-col items-center md:flex-row md:min-h-[200px] justify-center">
      <div className="flex flex-col my-3 md:mr-10 w-full max-w-lg">
        <textarea
          value={inputText}
          className="textarea textarea-bordered w-full"
          onInput={handleInput}
          placeholder="请输入网址 https://xx.xxx 或任意文本"
        ></textarea>
        <button
          onClick={handleGen}
          disabled={inputText.length <= 0}
          className="btn btn-sm btn-outline mt-6"
        >
          生成二维码
        </button>
        <button
          onClick={handleDownload}
          className="btn btn-sm btn-outline mt-6"
        >
          下载
        </button>
      </div>
      <PhotoSlider
        images={previewImgs.map((url) => ({ src: url, key: url }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={0}
      />
      <div className="border shadow w-52 h-52 relative shrink-0">
        <Image
          style={{ display: loading ? 'none' : 'block' }}
          className="cursor-pointer"
          src=""
          alt="qrcode"
          ref={codeImgRef}
          fill={true}
          onClick={handlePreview}
        />
      </div>
    </div>
  )
}
export default QRcodeGen
