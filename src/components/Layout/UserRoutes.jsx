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
import PostsPage from '../../pages/PostsPage';
import PostDetailsPage from '../../pages/PostDetailsPage';
import PostsByTagPage from '../../pages/PostsByTagPage';
import UsersPostsPage from '../../pages/UsersPostsPage';
import FavoritesPostsPage from '../../pages/FavoritesPostsPage';

const UserRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='/tags/:tag' element={<PostsByTagPage />} />
          <Route path='posts/:id' element={<PostDetailsPage />} />
          <Route element={<PublicRoute />}>
            <Route path='/signup' element={<RegisterPage />} />
            <Route path='/signin' element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='posts/users/:user' element={<UsersPostsPage />} />
            <Route path='posts/:id/favorites' element={<FavoritesPostsPage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/products/add-product' element={<CreateProductsPage />} />
            <Route path='/products/:id' element={<ProductDetailsPage />} />
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
