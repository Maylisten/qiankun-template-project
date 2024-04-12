import {
  Link,
  Outlet,
  useResolvedPath,
  useRouteData,
  useSelectedRoutes,
} from "umi";

export default function Layout() {
  const routes = useSelectedRoutes();
  const currentPath = routes.at(-1)?.pathname;

  return (
    <div className="h-full w-full flex flex-col">
      <div className=" w-full h-16 max-h-16 flex flex-row items-center bg-black/65 text-white">
        Sub Umi App
      </div>
      <div className="w-full h-16 flex flex-row gap-5">
        <Link
          to="/page1"
          className={`group ${currentPath === "/page1" ? "active" : ""}`}
        >
          <span className=" group-[.active]:text-pink-500">PAGE1</span>
        </Link>
        <Link
          to="/page2"
          className={`group ${currentPath === "/page2" ? "active" : ""}`}
        >
          <span className=" group-[.active]:text-pink-500">PAGE2</span>
        </Link>
      </div>
      <main className="w-full flex-1">
        <Outlet />
      </main>
    </div>
  );
}
