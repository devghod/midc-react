import { lazy } from "react";

const TodoPage = lazy(() => import('../pages/TodoPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export {
  TodoPage,
  HomePage
}