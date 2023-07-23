'use client'

import { TagContainer } from '@/components/layout/tag-container'
import { useCallback, useMemo, useState } from 'react'
import { JsonReader } from '@dellarosamarco/json-2-ts'
import copy from 'copy-to-clipboard'
import { toCamelCase, toSnakeCase } from '@/utils'
import { useStore } from '@/store/json2ts'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'tools whatfa',
//   description: '在线工具',
// }

export default function Json2Ts() {
  // const [json, setJson] = useState('')
  const [tsResult, setTsResult] = useState('')
  const setJson = useStore((state) => state.setLastJson)
  const json = useStore((state) => state.lastJson)

  const handleConvert = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const result = JsonReader.convert(jsonObj)
      setTsResult(result)
    } catch (error) {
      console.error(error)
    }
  }, [json])

  const onInput = useCallback(
    (event: any) => {
      setJson(event.target.value)
    },
    [setJson]
  )

  const handleCopy = useCallback(() => {
    copy(tsResult)
  }, [tsResult])

  const handleFormat = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const result = JSON.stringify(jsonObj, null, 2)
      setJson(result)
    } catch (error) {
      console.error(error)
    }
  }, [json, setJson])

  const handleToCamel = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const camelObj = toCamelCase(jsonObj)
      const result = JSON.stringify(camelObj, null, 2)
      setJson(result)
    } catch (error) {
      console.error(error)
    }
  }, [json, setJson])

  const handleToSnake = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const snakeObj = toSnakeCase(jsonObj)
      const result = JSON.stringify(snakeObj, null, 2)
      setJson(result)
    } catch (error) {
      console.error(error)
    }
  }, [json, setJson])

  const btnList = useMemo(
    () => [
      {
        key: 'CONVERT',
        text: '转换',
        onClick: handleConvert,
      },
      {
        key: 'COPY',
        text: '复制',
        onClick: handleCopy,
      },
      {
        key: 'FORMAT',
        text: '格式化',
        onClick: handleFormat,
      },
      {
        key: 'TO_CAMEL',
        text: '转驼峰',
        onClick: handleToCamel,
      },
      {
        key: 'TO_SNAKE',
        text: '转下划线',
        onClick: handleToSnake,
      },
    ],
    [handleConvert, handleCopy, handleFormat, handleToCamel, handleToSnake]
  )

  return (
    <main className="p-6 pt-14">
      <TagContainer title="json转ts">
        <h2 className="ml-1 my-3 text-sm md:text-lg">
          在线JSON转typescript工具 转驼峰/下划线/格式化
        </h2>
        <div className="flex flex-col lg:flex-row">
          <textarea
            value={json}
            onChange={onInput}
            className="textarea textarea-bordered w-full h-48 md:h-56 lg:h-[460px]"
            placeholder="请输入JSON"
          />
          <div
            className="
          flex  my-4 flex-wrap m-3 shrink-0 lg:flex-col"
          >
            {btnList.map(({ key, text, onClick }) => (
              <button
                key={key}
                onClick={onClick}
                className="btn btn-sm btn-neutral mr-2 mb-2 sm:btn-sm"
              >
                {text}
              </button>
            ))}
          </div>

          <textarea
            value={tsResult}
            className="textarea textarea-bordered w-full h-48 md:h-56 lg:h-[460px]"
            readOnly
            placeholder="等待转换..."
          ></textarea>
        </div>
      </TagContainer>
    </main>
  )
}
