'use client'

import { getClipboard, saveClipboard } from '@/services/clipboard'
import { getInputValue, url } from '@/utils'
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import copy from 'copy-to-clipboard'
import LoadingButton from '@/components/ui/loading-button'
import Image from 'next/image'
import QrCodeWithLogo2 from 'qr-code-with-logo'
import { toast } from 'react-toastify'
interface Props {
  initContent: string
  id: string
}

const ClipBoardView: FC<Props> = ({ initContent, id }) => {
  const [content, setContent] = useState(initContent)

  const codeImgRef = useRef<HTMLImageElement>(null)
  const [loading, setLoading] = useState(true)

  const onChange = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setContent(value)
  }, [])

  const handleSave = useCallback(() => {
    return saveClipboard(id, content)
  }, [content, id])

  const handleCopy = useCallback(() => {
    copy(content)
  }, [content])

  const handleCopyId = useCallback(() => {
    copy(id)
  }, [id])

  const handleRefresh = useCallback(() => {
    return getClipboard(id).then((val) => {
      setContent(val.content)
    })
  }, [content, id])

  const generateShareUrl = useCallback(() => {
    console.log('generateShareUrl', url(`/clipboard/${id}`).href)

    return url(`/clipboard/${id}`).href
  }, [id])

  const handleCopyShareLink = useCallback(() => {
    const success = copy(generateShareUrl())
    if (success) {
      toast.success('已复制')
    }
  }, [generateShareUrl])

  const handleBind = useCallback(
    (opt?: any) => {
      return QrCodeWithLogo2.toImage({
        image: codeImgRef.current,
        nodeQrCodeOptions: {
          margin: 1,
        },
        content: generateShareUrl(),
        width: 380,
        ...opt,
      })
    },
    [generateShareUrl]
  )

  useEffect(() => {
    handleBind({}).then(() => setLoading(false))
  }, [handleBind])

  return (
    <div>
      <p className="text-center text-lg">
        剪切板ID:{' '}
        <span
          onClick={handleCopyId}
          className="text-accent text-xl cursor-pointer hover:text-accent-focus tooltip select-none"
          data-tip="点击复制"
        >
          {id}
        </span>
      </p>

      <textarea
        className="textarea textarea-bordered w-full h-64 mt-4"
        placeholder="请输入内容"
        value={content}
        onChange={onChange}
      />
      <div className="flex mt-4">
        <button onClick={handleCopy} className="btn btn-neutral btn-sm mr-5">
          复制
        </button>
        <LoadingButton onSubmit={handleRefresh} className="mr-5">
          刷新
        </LoadingButton>
        <LoadingButton onSubmit={handleSave}>保存</LoadingButton>
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <div
          onClick={handleCopyShareLink}
          className="w-40 h-40 relative cursor-pointer"
        >
          <Image
            style={{ display: loading ? 'none' : 'block' }}
            className="cursor-pointer"
            src=""
            alt="qrcode"
            ref={codeImgRef}
            fill={true}
          />
        </div>
        <span onClick={handleCopyShareLink} className="cursor-pointer">
          点击复制链接
        </span>
      </div>
    </div>
  )
}

export default ClipBoardView
