import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import ToolCard from '@/components/biz/tool-card'
import svg from '@/assets/json.svg'
// import { asyncWait } from '@/utils'
import { toolPanels } from '@/config'

// import { useTheme } from 'next-themes'

export default async function Home() {
  // const { setTheme } = useTheme()
  // await asyncWait(1)
  return (
    <main className="flex-grow-0 flex-col items-center justify-between p-6 ">
      {/* <div onClick={() => setTheme('light')}>light</div> */}
      {/* <div onClick={() => setTheme('dark')}>dark</div> */}
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
      {
        toolPanels.map(panel => (
          <div key={panel.title} className="w-full bg-base-100 border mt-10 py-7 px-4 rounded-md  shadow-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="py-1 px-3 absolute -mt-12 bg-base-100 border rounded-md text-base-content flex items-center">
              <FontAwesomeIcon
                className="shrink-0"
                icon={faFire}
                width={16}
                height={16}
              />
              <span className="shrink-0 ml-1">{panel.title}</span>
            </div>
            {/* <ToolCard img="/icon/json.png" title="JSON" desc="JSON转typescript" /> */}
            {panel.tools.map(tool => (
              <ToolCard key={tool.title} img={svg} title={tool.title} desc={tool.desc} />
            ))}
          </div>
        ))
      }

    </main>
  )
}
