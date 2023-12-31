'use client'

import Pagination from '@/components/common/Pagination'
import PanItem from './PanItem'
import { useState } from 'react'

// import { useSearchParams } from 'next/navigation'

// keywords
export default function Page() {
  // const searchParams = useSearchParams()

  // const searchWords = searchParams.get('keywords')
  // const { slug: searchWords } = params
  // return <div>{searchWords}</div>
  const [page, setPage] = useState(4)
  // const [total, setTotal] = useState(10)
  const total = 10
  const handlePageChange = (page: number) => {
    setPage(page)
  }
  const panList = [
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: '123',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'd2fd23',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
  ]
  return (
    <div className="pt-3">
      <div className="flex flex-col mx-3 gap-4">
        {panList.map((item, idx) => (
          <PanItem key={idx} {...item} />
        ))}
      </div>
      <Pagination page={page} total={total} onChange={handlePageChange} />
    </div>
  )
}
