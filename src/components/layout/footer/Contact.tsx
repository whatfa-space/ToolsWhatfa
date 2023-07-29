import GithubIcon from '@/components/icon/github-icon'
import TLink from '@/components/ui/TLink/t-link'

const Contact = () => {
  const contactList = [
    {
      key: 'GITHUB',
      tooltip: 'GitHub',
      href: 'https://github.com/whatfa-space/ToolsWhatfa',
      component: <GithubIcon className="w-7 h-7" />,
    },
  ]
  return (
    <div className="flex flex-row items-center mr-4">
      {contactList.map((item) => (
        <div key={item.key} className="tooltip" data-tip={item.tooltip}>
          <TLink
            href={item.href}
            target="_blank"
            underline={false}
            className="s shadow-xl rounded-full"
          >
            {item.component}
          </TLink>
        </div>
      ))}
    </div>
  )
}
export default Contact
