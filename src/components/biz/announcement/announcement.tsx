import { TagContainer } from '@/components/layout/tag-container'
import TLink from '@/components/ui/TLink/t-link'
import { underlineAnimationClx } from '@/lib/class'
import { clsxm } from '@/lib/helper/clsx'
import clsx from 'clsx'
import Link from 'next/link'
import { FaIcon } from '../FaIcon'

export function Announcement() {
  return (
    <TagContainer title={'公告'}>
      <ul>
        <li>
          <span className='flex items-center text-sm'>
            <FaIcon icon="faUserGroup" className="w-[14px] h-[14px] " />
              QQ闲聊群：
              <TLink target='_blank' href={'https://qm.qq.com/q/xWyvsLDuIE'}>496313529</TLink>
          </span>
        </li>
      </ul>
    </TagContainer>
  )
}
