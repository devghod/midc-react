import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TodoPage, HomePage } from '../pages';
import {
  SuspenseLoader,
  ErrorPage,
  Layout
} from '../components';

const Routers = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='' element={<HomePage />} />
            <Route path='todo' element={<TodoPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
