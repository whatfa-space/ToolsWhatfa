import GithubIcon from '@/components/icon/github-icon'
import { TencentIcon } from '@/components/icon/TencentIcon'
import TLink from '@/components/ui/TLink/t-link'

const Contact = () => {
  const contactList = [
    {
      key: 'GITHUB',
      tooltip: 'GitHub',
      href: 'https://github.com/whatfa-space/ToolsWhatfa',
      component: <GithubIcon className="w-7 h-7" />,
    },
    {
      key: 'TENCENT',
      tooltip: 'qq',
      href: 'https://qm.qq.com/q/xWyvsLDuIE',
      component: <TencentIcon className="w-7 h-7" />,
    },
  ]
  return (
    <div className="flex flex-row items-center">
      {contactList.map((item) => (
        <TLink
          key={item.key}
          href={item.href}
          target="_blank"
          underline={false}
          className="flex items-center"
        >
          <div
            className="tooltip rounded-full p-1  m-1 shadow-[0_1px_2px_0_rgba(127.5,127.5,127.5,.2),_0_1px_3px_0_rgba(127.5,127.5,127.5,.1)]"
            data-tip={item.tooltip}
          >
            {item.component}
          </div>
        </TLink>
      ))}
    </div>
  )
}
export default Contact
