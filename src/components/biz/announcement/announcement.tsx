import { TagContainer } from '@/components/layout/tag-container'
import { underlineAnimationClx } from '@/lib/class'
import { clsxm } from '@/lib/helper/clsx'
import Link from 'next/link'
import { FaIcon } from '../FaIcon'

export function Announcement() {
  return (
    <TagContainer title={'公告'}>
      <ul>
        <li>
          <span className='flex items-center'>
            <FaIcon icon="faUserGroup" className="w-5 h-5 " />
              QQ闲聊群：
            <Link target='_blank' href={'https://qm.qq.com/q/xWyvsLDuIE'} className={clsxm(underlineAnimationClx,'text-info')}>496313529</Link>
          </span>
        </li>
      </ul>
    </TagContainer>
  )
}
