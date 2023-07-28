import GithubIcon from '@/components/icon/github-icon'
import TLink from '@/components/ui/TLink/t-link'

const Contact = () => {
  return (
    <div className="flex flex-row items-center mr-2">
      <TLink
        href="https://github.com/whatfa-space/ToolsWhatfa"
        target="_blank"
        underline={false}
        className="s shadow-xl rounded-full"
      >
        <GithubIcon className="w-[32px] h-[32px]" />
      </TLink>
    </div>
  )
}
export default Contact
