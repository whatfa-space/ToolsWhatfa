import { TagContainer } from '@/components/layout/tag-container'
import TLink from '@/components/ui/TLink/t-link'
import { FaIcon } from '../FaIcon'

export function Announcement() {
  return (
    <TagContainer title={'公告'} icon='faBullhorn'>
      <ul>
        <li>
          <span className='flex items-center text-sm font-mono'>
            <FaIcon icon="faUserGroup" className="w-[14px] h-[14px] " />
              QQ闲聊群：
            <TLink target='_blank' href={'https://qm.qq.com/q/xWyvsLDuIE'}>496313529</TLink>
          </span>
        </li>
      </ul>
    </TagContainer>
  )
}
