import PanItem from './PanItem'
import SearchInput from '../SearchInput'
import Footer from './Footer'
import { searchPan } from '@/services/pan'
import { IPan } from '@/interface/pan/common'

export default async function Page({
  searchParams,
}: {
  searchParams: {
    keywords: string
    page: string
  }
}) {
  const { keywords, page = 1 } = searchParams || {}
  const total = 10
  let panList: IPan[] = []
  const searchRes = await searchPan(keywords, Number(page))
  panList = searchRes.panList
  return (
    <>
      <SearchInput original={keywords || ''} />
      <div className="pt-3">
        <div className="flex flex-col mx-3 gap-4">
          {panList.map((item, idx) => (
            <PanItem key={idx} {...item} />
          ))}
        </div>
        <Footer page={Number(page)} total={total} keywords={keywords} />
      </div>
    </>
  )
}
