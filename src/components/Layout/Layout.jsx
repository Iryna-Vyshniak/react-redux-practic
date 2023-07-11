import { Suspense } from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-col items-center flex-1 p-4'>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
