import { TagContainer } from '@/components/layout/tag-container'
import { IToolsPanel } from '@/interface/tools'
import { FC } from 'react'
import ToolCard from '../tool-card'

interface ToolsPanelProps {
  toolsPanel: IToolsPanel
}

export const ToolsPanel: FC<ToolsPanelProps> = ({ toolsPanel }) => (
  <TagContainer
    title={toolsPanel.title}
    icon={toolsPanel.icon}
    key={toolsPanel.title}
    iconClass={toolsPanel.iconClass}
    className="grid grid-cols-2 gap-3 md:grid-cols-3"
  >
    {toolsPanel.tools.map((tool) => (
      <ToolCard key={tool.title} {...tool} />
    ))}
  </TagContainer>
)
