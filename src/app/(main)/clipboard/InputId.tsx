'use client'

import { getInputValue } from '@/utils/dom'
import { generateRandomString } from '@/utils/random'
import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useState } from 'react'

const getClipboardUrl = (clipboardId: string) => {
  return '/clipboard/' + clipboardId
}

const InputId = () => {
  const router = useRouter()

  const [clipboardId, setClipboardId] = useState(generateRandomString(6))

  const handleCreate = useCallback(() => {
    const randomId = generateRandomString(6)
    router.push(getClipboardUrl(randomId))
  }, [])

  const handleJoin = useCallback(() => {
    router.push(getClipboardUrl(clipboardId))
  }, [clipboardId])

  const handleChange = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setClipboardId(value)
  }, [])

  return (
    <div>
      <p className="text-center">
        在多个页面上打开同一剪贴板，轻松将文本从一台计算机复制到另一台计算机！
      </p>
      <div className="flex flex-col mt-5 items-center justify-center md:flex-row">
        <button onClick={handleCreate} className="btn">
          创建新剪切板
        </button>
        <span className="m-4">或</span>
        <div>
          <input
            value={clipboardId}
            onChange={handleChange}
            type="text"
            className="input input-bordered focus:outline-0 rounded-r-none border-r-0"
            placeholder="输入剪切板ID"
          />
          <button
            onClick={handleJoin}
            className="btn btn-neutral border-l-0 rounded-l-none no-animation relative -top-[1px]"
          >
            加入
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputId
