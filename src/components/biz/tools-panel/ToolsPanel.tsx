import { TagContainer } from '@/components/layout/tag-container'
import { IToolsPanel } from '@/interface/tools'
import { FC } from 'react'
import ToolCard from '../tool-card'

interface ToolsPanelProps {
  toolsPanel: IToolsPanel
}

export const ToolsPanel: FC<ToolsPanelProps> = ({ toolsPanel }) => (
  <TagContainer title={toolsPanel.title} icon={toolsPanel.icon} key={toolsPanel.title} className="grid grid-cols-2 gap-2 md:grid-cols-3">
    {toolsPanel.tools.map(tool => (
      // <ToolCard key={tool.title} img={svg} title={tool.title} desc={tool.desc} />
      <ToolCard
        key={tool.title}
        // icon={tool.icon}
        // title={tool.title}
        // desc={tool.desc}
        {...tool}
      />
    ))}
  </TagContainer>
)
// return (
//   <div key={toolsPanel.title} className="w-full  border border-neutral-content  mt-10 py-7 px-4 rounded-md  shadow-sm grid grid-cols-2 md:grid-cols-3 gap-2">
//     <div className="py-1 px-3 absolute -mt-12 bg-base-100 border rounded-md text-base-content flex items-center">
//       <FontAwesomeIcon
//         className="shrink-0"
//         icon={panelIcon}
//         width={16}
//         height={16}
//       />
//       <span className="shrink-0 ml-1">{toolsPanel.title}</span>
//     </div>
//     {toolsPanel.tools.map(tool => (
//       // <ToolCard key={tool.title} img={svg} title={tool.title} desc={tool.desc} />
//       <ToolCard key={tool.title} icon={tool.icon} title={tool.title} desc={tool.desc} />
//     ))}
//   </div>
// )
