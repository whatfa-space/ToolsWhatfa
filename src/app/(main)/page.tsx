import { toolPanels } from '@/config'
import { ToolsPanel } from '@/components/biz/tools-panel'
import { Announcement } from '@/components/biz/announcement'

export default async function Home() {
  return (
    // <main className="flex-grow-0 flex-col items-center justify-between p-6 pt-14 fill-content">
    <>
      {toolPanels.map((panel) => (
        <ToolsPanel key={panel.title} toolsPanel={panel} />
      ))}
      <Announcement />
      {/* <article className="prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article> */}
      {/* </main> */}
    </>
  )
}
