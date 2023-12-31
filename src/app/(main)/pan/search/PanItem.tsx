interface IPanItemProps {
  title: string
  code: string
}
export default function PanItem({ title, code = '-' }: IPanItemProps) {
  return (
    <div className="flex border-b pb-4">
      <div className="flex flex-col flex-1 gap-2 text-sm">
        <div className="s text-lg font-semibold">{title}</div>
        <div>提取码: {code}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="cursor-pointer">复制跳转码</div>
        <div className="cursor-pointer">跳转</div>
      </div>
    </div>
  )
}
