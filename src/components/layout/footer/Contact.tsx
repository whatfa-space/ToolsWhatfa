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
        <div key={item.key} className="tooltipa mr-3" data-tip={item.tooltip}>
          <TLink
            href={item.href}
            target="_blank"
            underline={false}
            className="shadow-xl rounded-full"
          >
            {item.component}
          </TLink>
        </div>
      ))}
    </div>
  )
}
export default Contact
