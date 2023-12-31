import PanItem from './PanItem'
import SearchInput from '../SearchInput'
import Footer from './Footer'
import { searchPan } from '@/services/pan'

export default async function Page({
  searchParams,
}: {
  searchParams: {
    keywords: string
    page: string
  }
}) {
  const { keywords, page = 1 } = searchParams || {}
  const { panList, totalPage } = (await searchPan(keywords, Number(page))) || {
    panList: [],
    totalPage: 0,
  }

  return (
    <>
      <SearchInput original={keywords || ''} />
      <div className="pt-3">
        <div className="text-center">共{totalPage}页</div>
        <div className="flex flex-col mx-3 gap-4 mt-3">
          {panList.map((item, idx) => (
            <PanItem key={idx} {...item} />
          ))}
        </div>
        <Footer page={Number(page)} totalPage={totalPage} keywords={keywords} />
      </div>
    </>
  )
}
