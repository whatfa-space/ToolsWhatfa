import { TagContainer } from '@/components/layout/tag-container'
import Link from 'next/link'
import { FaIcon } from '../FaIcon'

// FaIcon
export function Announcement() {
  return (
    <TagContainer title={'公告'}>
      <ul>
        <li>
          <span>
            <FaIcon icon="faUserGroup" className="w-5 h-5 inline" />
              QQ闲聊群
            <Link target='_blank' href={'https://qm.qq.com/q/xWyvsLDuIE'} className='text-primary'>496313529</Link>
          </span>
        </li>
      </ul>
    </TagContainer>
  )
}
