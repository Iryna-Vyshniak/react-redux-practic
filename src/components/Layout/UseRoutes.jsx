import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CounterPage from '../../pages/CounterPage';
import HomePage from '../../pages/HomePage';
import ToDoPage from '../../pages/ToDoPage';
import NotFound from '../../pages/NotFound';
import CreateProductsPage from '../../pages/CreateProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';

const UseRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/:id' element={<ProductDetailsPage />} />
          <Route path='/create-products' element={<CreateProductsPage />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path='/todo' element={<ToDoPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;
