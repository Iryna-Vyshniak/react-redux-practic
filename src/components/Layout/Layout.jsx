import { Suspense } from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Header />
      <main className='flex flex-col items-center flex-1 mt-10 py-5 mx-auto max-w-6xl w-full'>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
