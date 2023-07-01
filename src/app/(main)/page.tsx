import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <main className="flex-grow-0 flex-col items-center justify-between p-6 bg-base-100">
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
      <div className="w-full bg-base-200  shadow-black mt-10 py-7 px-4 rounded-md">
        <div className="py-1 px-3 absolute -mt-12 bg-info rounded-md text-base-100 flex items-center">
          <FontAwesomeIcon
          className="shrink-0"
            icon={faFire}
            // icon={['fal','fire']}
            // icon="fire"
            width={16}
            height={16}
            // unicode={'f058'}
          />
          <span className="shrink-0 ml-1">热门</span>
        </div>
        hello ArtBoadr
      </div>
    </main>
  );
}
