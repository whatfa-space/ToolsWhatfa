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
      <p className="text-center">剪切板ID: {slug}</p>
      <ClipBoardView />
    </div>
  )
}
