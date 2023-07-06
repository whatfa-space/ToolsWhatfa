import { IToolsPanel } from '@/interface/tools'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import svg from '@/assets/json.svg'
import ToolCard from '../tool-card'

interface ToolsPanelProps{
  toolsPanel:IToolsPanel
}

export const ToolsPanel:FC<ToolsPanelProps> = ({ toolsPanel }) => (
  <div key={toolsPanel.title} className="w-full  border mt-10 py-7 px-4 rounded-md  shadow-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-3 gap-2">
    <div className="py-1 px-3 absolute -mt-12 bg-base-100 border rounded-md text-base-content flex items-center">
      <FontAwesomeIcon
        className="shrink-0"
        icon={faFire}
        width={16}
        height={16}
      />
      <span className="shrink-0 ml-1">{toolsPanel.title}</span>
    </div>
    {toolsPanel.tools.map(tool => (
      <ToolCard key={tool.title} img={svg} title={tool.title} desc={tool.desc} />
    ))}
  </div>
)
