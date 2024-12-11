import { lazy } from "react";

const CreateTodo = lazy(() => import('./todo/CreateTodo'));

export {
  CreateTodo
}