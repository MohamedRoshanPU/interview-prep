import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const RootLayout = lazy(() => import("../App"));
const HomePage = lazy(() => import("../pages/home"));
const Debounce = lazy(() => import("../pages/debounce-input"));
const Scroll = lazy(() => import("../pages/infinite-scroll"));
const Accordian = lazy(() => import("../pages/accordian"));
const Modal = lazy(() => import("../pages/modal"));
const Pagination = lazy(() => import("../pages/pagination"));
const LimitPagination = lazy(() => import("../pages/pagination-limit-offset"));
const Tabs = lazy(() => import("../pages/tabs"));
const MultiInput = lazy(() => import("../pages/multi-input"));
const Todo = lazy(() => import("../pages/todo"));
const Resize = lazy(() => import("../pages/page-resize"));
const Cursor = lazy(() => import("../pages/custom-cursor"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "debounce-input", Component: Debounce },
      { path: "infinite-scroll", Component: Scroll },
      { path: "accordian", Component: Accordian },
      { path: "modal", Component: Modal },
      { path: "pagination", Component: Pagination },
      { path: "limit-pagination", Component: LimitPagination },
      { path: "tabs", Component: Tabs },
      { path: "multi-input", Component: MultiInput },
      { path: "todo", Component: Todo },
      { path: "page-resize", Component: Resize },
      { path: "custom-cursor", Component: Cursor },
    ],
  },
]);

export default router;
