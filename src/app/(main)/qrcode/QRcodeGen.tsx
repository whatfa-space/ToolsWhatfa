'use client'

import { getInputValue } from '@/utils'
import Image from 'next/image'
import QrCodeWithLogo2 from 'qr-code-with-logo'

import {
  FormEvent, useCallback, useEffect, useRef, useState,
} from 'react'
import debounce from 'lodash/debounce'

const initUrlText = 'https://tools.whatfa.com/'

export const QRcodeGen = () => {
  const [inputText, setInputText] = useState(initUrlText)
  const [text, setText] = useState(initUrlText)
  const [loading, setLoading] = useState(true)
  const codeImgRef = useRef<HTMLImageElement>(null)

  const handleInput = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setInputText(value)
  }, [])

  const handleBind = useCallback((opt?: any) => {
    return QrCodeWithLogo2.toImage({
      image: codeImgRef.current,
      nodeQrCodeOptions: {
        margin: 1,
      },
      content: text,
      width: 380,
      ...opt,
    })
  }, [text])

  const handleGen = debounce(() => {
    setText(inputText)
    console.log('handleGen')
  }, 300, {
    leading: true,
  })

  const handleDownload = () => {
    handleBind({
      download: true,
      downloadName: 'qrcode.png',
    })
  }

  useEffect(() => {
    handleBind().then(() => setLoading(false))
  }, [handleBind])

  return (
    <div className='flex flex-col items-center md:flex-row md:min-h-[200px] justify-center'>
      <div className='flex flex-col my-3 md:mr-10 w-full max-w-lg'>
        <textarea value={inputText} className='textarea textarea-bordered w-full' onInput={handleInput} placeholder='请输入网址 https://xx.xxx 或任意文本'></textarea>
        <button onClick={handleGen} disabled={inputText.length <= 0} className='btn btn-sm btn-outline mt-6'>生成二维码</button>
        <button onClick={handleDownload} className='btn btn-sm btn-outline mt-6'>下载</button>
      </div>
      <div className='border shadow w-52 h-52 relative'>
        <Image style={{ display: loading ? 'none' : 'block' }} src='' alt='qrcode' ref={codeImgRef} fill={true} />
      </div>

    </div>
  )
}
export default QRcodeGen