import { TagContainer } from '@/components/layout/tag-container'
import MainArea from './MainArea'
import { Metadata } from 'next'
import { getReaction, Reactions as ReactionsRes } from '@/services/reactions'
import Reactions from '@/components/biz/reactions'

export const metadata: Metadata = {
  title: 'json转ts - tools whatfa',
  description:
    'json转ts - tools whatfa 免费在线Json格式化工具  free json format',
  keywords:
    'toolswhatfa , 免费在线Json格式化工具, json格式化, free json format',
}

export default async function Json2Ts() {
  const reactionKey = 'json2ts'
  let data: ReactionsRes = { count: 0, key: '' }
  try {
    data = await getReaction(reactionKey)
  } catch (err) {
    console.log('layout getReaction', err)
  }
  return (
    // <main className="p-6 pt-14">
    <TagContainer title="json转ts">
      <h2 className="ml-1 my-3 text-sm md:text-lg">
        在线JSON转typescript工具 转驼峰/下划线/格式化
      </h2>
      <Reactions id={reactionKey} count={data.count} />
      <MainArea />
    </TagContainer>
    // </main>
  )
}
