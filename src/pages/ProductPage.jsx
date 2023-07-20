import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/Products/SearchBox';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/selectors';
import { ProductsList } from '../components/Products/ProductsList';

const ProductPage = () => {
  const location = useLocation();

  const products = useSelector(selectProducts);
  // console.log(products);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <section>
      <div className='flex items-center space-x-3'>
        <SearchBox value={productName} onChange={updateQueryString} />
        <NavLink to='add-product' state={location.state}>
          Add product
        </NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <ProductsList products={visibleProducts} />
    </section>
  );
};

export default ProductPage;
