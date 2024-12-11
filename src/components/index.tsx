import { lazy } from 'react';

import SuspenseLoader from '../components/SuspenseLoader';

const ErrorPage = lazy(() => import('../components/ErrorPage'));
const Layout = lazy(() => import('../components/Layout'));
const TodoList = lazy(() => import('../components/todo/TodoList'));
const TodoListItem = lazy(() => import('../components/todo/TodoListItem'));
const TodoForm = lazy(() => import('../components/todo/TodoForm'));
const TodoAlert = lazy(() => import('../components/todo/TodoAlert'));

export {
  SuspenseLoader,
  ErrorPage,
  Layout,
  TodoList,
  TodoListItem,
  TodoForm,
  TodoAlert
}