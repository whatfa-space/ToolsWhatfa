import { getClipboard } from '@/services/clipboard'
import ClipBoardView from './ClipBoardView'

interface PageProps {
  params: {
    slug: string
  }
}
export default async function page({ params }: PageProps) {
  const { slug: id } = params
  if (!id) return <div>id is null</div>
  let content = ''
  try {
    const data = await getClipboard(id)
    content = data.content
  } catch (error) {
    console.error(error)
  }
  return (
    <div>
      <p className="text-center">剪切板ID: {id}</p>
      <ClipBoardView initContent={content} id={id} />
    </div>
  )
}
