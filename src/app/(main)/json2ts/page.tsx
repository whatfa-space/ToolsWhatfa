'use client'

import { TagContainer } from '@/components/layout/tag-container'
import { useCallback, useState } from 'react'
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

  const onInput = useCallback((event: any) => {
    setJson(event.target.value)
  }, [])

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
  }, [json])

  const handleToCamel = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const camelObj = toCamelCase(jsonObj)
      const result = JSON.stringify(camelObj, null, 2)
      setJson(result)
    } catch (error) {
      console.error(error)
    }
  }, [json])

  const handleToSnake = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const snakeObj = toSnakeCase(jsonObj)
      const result = JSON.stringify(snakeObj, null, 2)
      setJson(result)
    } catch (error) {
      console.error(error)
    }
  }, [json])

  return (
    <main className="p-6 pt-14">
      <TagContainer title="json转ts">
        <h2 className="ml-1 my-3 text-sm md:text-lg">
          在线JSON转typescript工具 转驼峰/下划线/格式化
        </h2>
        <div className="flex flex-col lg:flex-row">
          {/* input */}
          <textarea
            value={json}
            onChange={onInput}
            className="textarea textarea-bordered w-full h-48 md:h-56 lg:h-[460px]"
            placeholder="请输入JSON"
          />
          <div className="flex  my-4 flex-wrap m-3 shrink-0 lg:flex-col">
            <button
              onClick={handleConvert}
              className="btn btn-xs btn-neutral mr-2 mb-2 sm:btn-sm"
            >
              转换
            </button>
            <button
              onClick={handleCopy}
              className="btn btn-xs btn-neutral mr-2 mb-2 sm:btn-sm"
            >
              复制
            </button>
            <button
              onClick={handleFormat}
              className="btn btn-xs btn-neutral mr-2 mb-2 sm:btn-sm"
            >
              格式化
            </button>
            <button
              onClick={handleToCamel}
              className="btn btn-xs btn-neutral mr-2 mb-2 sm:btn-sm"
            >
              转驼峰
            </button>
            <button
              onClick={handleToSnake}
              className="btn btn-xs btn-neutral mr-2 mb-2 sm:btn-sm"
            >
              转下划线
            </button>
          </div>

          {/* out */}
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
