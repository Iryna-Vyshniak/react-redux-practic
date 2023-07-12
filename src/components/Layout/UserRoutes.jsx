import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CounterPage from '../../pages/CounterPage';
import HomePage from '../../pages/HomePage';
import ToDoPage from '../../pages/ToDoPage';
import NotFound from '../../pages/NotFound';
import CreateProductsPage from '../../pages/CreateProductsPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';
import ProductPage from '../../pages/ProductPage';
import RegisterPage from '../../pages/RegisterPage';
import { LoginPage } from '../../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const UserRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route path='/signup' element={<RegisterPage />} />
            <Route path='/signin' element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route index element={<HomePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/products/:id' element={<ProductDetailsPage />} />
            <Route path='/create-products' element={<CreateProductsPage />} />
            <Route path='/counter' element={<CounterPage />} />
            <Route path='/todo' element={<ToDoPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
