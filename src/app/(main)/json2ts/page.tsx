'use client'

import { TagContainer } from '@/components/layout/tag-container'
import { useCallback, useState } from 'react'
import { JsonReader } from '@dellarosamarco/json-2-ts'
import copy from 'copy-to-clipboard'
import { toCamelCase, toSnakeCase } from '@/utils'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'tools whatfa',
//   description: '在线工具',
// }

export default function Json2Ts() {
  const [json, setJson] = useState('')
  const [tsResult, setTsResult] = useState('')

  const handleConvert = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const result = JsonReader.convert(jsonObj)
      setTsResult(result)
      console.log(result)
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
      console.log(result)
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
      console.log(result)
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
      console.log(result)
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
        <textarea
          value={json}
          onChange={onInput}
          className="textarea textarea-bordered w-full h-40 md:h-56"
          placeholder="请输入JSON"
        />
        <div className="flex my-4  flex-wrap">
          <button
            onClick={handleConvert}
            className="btn btn-sm btn-neutral mr-2 mb-2"
          >
            转换
          </button>
          <button
            onClick={handleCopy}
            className="btn btn-sm btn-neutral mr-2 mb-2"
          >
            复制
          </button>
          <button
            onClick={handleFormat}
            className="btn btn-sm btn-neutral mr-2 mb-2"
          >
            格式化
          </button>
          <button
            onClick={handleToCamel}
            className="btn btn-sm btn-neutral mr-2 mb-2"
          >
            转驼峰
          </button>
          <button
            onClick={handleToSnake}
            className="btn btn-sm btn-neutral mr-2 mb-2"
          >
            转下划线
          </button>
        </div>
        <textarea
          value={tsResult}
          className="textarea textarea-bordered w-full h-40 md:h-56"
          readOnly
          placeholder="等待转换..."
        ></textarea>
      </TagContainer>
    </main>
  )
}
