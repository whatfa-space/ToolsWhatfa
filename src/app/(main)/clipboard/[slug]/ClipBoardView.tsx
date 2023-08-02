'use client'

import { getClipboard, saveClipboard } from '@/services/clipboard'
import { getInputValue } from '@/utils'
import { FC, FormEvent, useCallback, useState } from 'react'
import copy from 'copy-to-clipboard'

interface Props {
  initContent: string
  id: string
}

const ClipBoardView: FC<Props> = ({ initContent, id }) => {
  const [content, setContent] = useState(initContent)

  const onChange = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setContent(value)
  }, [])

  const handleSave = useCallback(() => {
    saveClipboard(id, content).then(() => {
      alert('已保存')
    })
  }, [content, id])

  const handleCopy = useCallback(() => {
    copy(content)
  }, [content])

  const handleCopyId = useCallback(() => {
    copy(id)
  }, [id])

  const handleRefresh = useCallback(() => {
    getClipboard(id).then((val) => {
      setContent(val.content)
    })
  }, [content, id])

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
        <button onClick={handleRefresh} className="btn btn-outline btn-sm mr-5">
          刷新
        </button>
        <button onClick={handleSave} className="btn btn-outline btn-sm">
          保存
        </button>
      </div>
    </div>
  )
}

export default ClipBoardView
