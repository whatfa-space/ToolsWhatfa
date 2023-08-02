import { HTMLAttributes } from 'react'
const Line = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={'border-b-[0.5px] my-4 ' + className} {...rest}></div>
}
export default Line
