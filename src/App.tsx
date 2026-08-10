import { Link, Outlet } from "react-router-dom";

const links = [
  {
    title: "Debounce",
    path: "debounce-input",
  },
  {
    title: "Infinite Scroll",
    path: "infinite-scroll",
  },
  {
    title: "Pagination (Page)",
    path: "pagination",
  },
  {
    title: "Pagination (Limit & Offset)",
    path: "limit-pagination",
  },
  {
    title: "Accordian",
    path: "accordian",
  },
  {
    title: "Modal",
    path: "modal",
  },
  {
    title: "Multi Input",
    path: "multi-input",
  },
  {
    title: "Tabs",
    path: "tabs",
  },
  {
    title: "Todo ( Reducer )",
    path: "todo",
  },
  {
    title: "Page Resize (Throttle)",
    path: "page-resize",
  },
  {
    title: "Custom Cursor",
    path: "custom-cursor",
  },
];
function App() {
  return (
    <div className="flex w-full h-screen">
      <aside className="w-62.5 bg-amber-50 px-2 py-8 flex justify-center ">
        <div className="flex flex-col gap-5 text-center">
          {links.map((link) => {
            return (
              <Link className="text-black" to={link.path} key={link.path}>
                <span>{link.title}</span>
              </Link>
            );
          })}
        </div>
      </aside>
      <section className="grow bg-red-50">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
