import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/Products/SearchBox';
import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectProducts, selectTotalPages } from '../store/products/selectors';
import { ProductsList } from '../components/Products/ProductsList';
import { Pagination } from '../components/Pagination';

const ProductPage = () => {
  const [showForm, setShowForm] = useState();
  const [searchParams, setSearchParams] = useSearchParams({ name: '', page: 1 });
  // console.log(useSearchParams());
  //const { path } = history.location;

  const productName = searchParams.get('name') ?? '';
  const page = Number(searchParams.get('page') || 1);
  // console.log('PAGE: ', page, typeof page);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const location = useLocation();
  // console.log(location);
  const products = useSelector(selectProducts);
  // console.log(products);

  const visibleProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div className='flex flex-col items-center justify-between min-h-[85vh]'>
      <section className='flex flex-col items-center space-x-3 flex-1'>
        <div className='flex items-center space-x-3'>
          {!showForm && (
            // (location.pathname === '/products' ||
            //   (location.pathname === '/products' && location.search === '?page=1')) && (
            <SearchBox value={productName} onChange={updateQueryString} />
          )}
          {/* <NavLink to={{ pathname: 'add-product', state: location }} onClick={toggleForm}> */}
          <NavLink to={showForm ? ' ' : 'add-product'} state={location.state} onClick={toggleForm}>
            {showForm ? 'Hide form' : 'Add product'}
          </NavLink>
        </div>

        {/*   {showForm && (
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        )} */}
        <ProductsList products={visibleProducts} page={page} />
      </section>
      <section>
        <Pagination
          setSearchParams={setSearchParams}
          totalPages={totalPages}
          currentPage={currentPage - 1}
        />
      </section>
    </div>
  );
};

export default ProductPage;
