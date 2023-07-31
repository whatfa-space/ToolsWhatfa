import ClipBoardView from './ClipBoardView'

interface PageProps {
  params: {
    slug: string
  }
}
export default function page({ params }: PageProps) {
  const { slug } = params
  if (!slug) return <div>id is null</div>
  return (
    <div>
      hello {slug}
      <ClipBoardView />
    </div>
  )
}
