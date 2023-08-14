import { getClipboard } from '@/services/clipboard'
import ClipBoardView from './ClipBoardView'

interface PageProps {
  params: {
    slug: string
  }
}

export const dynamic = 'force-dynamic'

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
      <ClipBoardView initContent={content} id={id} />
    </div>
  )
}
