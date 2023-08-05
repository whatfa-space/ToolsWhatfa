const Menu = () => {
  return (
    <div className="drawer w-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <label
        htmlFor="my-drawer-3"
        className="btn btn-circle btn-outline border-zinc-200/80 btn-sm p-1 bg-transparent md:btn-md md:p-[8px] transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block stroke-current w-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
