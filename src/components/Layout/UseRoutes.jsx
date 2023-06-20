import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CounterPage from '../../pages/CounterPage';
import HomePage from '../../pages/HomePage';

const UseRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/counter' element={<CounterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;
