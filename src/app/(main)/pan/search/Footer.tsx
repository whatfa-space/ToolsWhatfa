'use client'

import Pagination from '@/components/common/Pagination'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

interface IFooterProps {
  page: number
  total: number
  keywords: string
}
export default function Footer({ page, total, keywords }: IFooterProps) {
  const router = useRouter()
  const handlePageChange = useCallback(
    (p: number) => {
      router.push(`/pan/search?page=${p}&keywords=${keywords}`)
    },
    [keywords, router]
  )
  return <Pagination page={page} total={total} onChange={handlePageChange} />
}
