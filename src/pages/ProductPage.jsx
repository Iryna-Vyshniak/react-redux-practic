import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectIsLoading,
  selectProducts,
  selectTotalPages,
} from '../store/products/selectors';
import { ProductsList } from '../components/Products/ProductsList';
import { Pagination } from '../components/Pagination';
import { getAllProductsThunk, getProductsByQueryThunk } from '../store/products/thunks';
import { BackLink } from '../components/BackLink';

const ProductPage = () => {
  // const [showForm, setShowForm] = useState();
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, name: '' });
  // console.log(useSearchParams());
  //const { path } = history.location;
  const location = useLocation();

  let name = searchParams.get('name') ?? '';
  const page = Number(searchParams.get('page') || 1);
  // console.log('PAGE: ', page, typeof page);
  const BackLinkHref = location.state?.from ?? '/products';
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  // const toggleForm = () => {
  //   setShowForm((prevState) => !prevState);
  // };

  useEffect(() => {
    name !== '' ? dispatch(getProductsByQueryThunk(name)) : dispatch(getAllProductsThunk(page));
  }, [dispatch, page, name]);

  const handleSearchChange = ({ target }) => {
    const inputValue = target.value;
    name = inputValue;
    setSearchParams({ page, name });
  };

  // const updateQueryString = (name) => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <div className='flex flex-col items-center justify-between min-h-[85vh]'>
      <section className='flex flex-col items-center space-x-3 flex-1'>
        <div className='flex items-center space-x-3'>
          <SearchBox value={name} onChange={handleSearchChange} />

          <NavLink to={'add-product'} state={location.state}>
            Add product
          </NavLink>
          {/* {!showForm && <SearchBox value={productName} onChange={handleSearchChange} />}

          <NavLink to={showForm ? ' ' : 'add-product'} state={location.state} onClick={toggleForm}>
            {showForm ? 'Hide form' : 'Add product'}
          </NavLink> */}
        </div>
        {isLoading ? (
          <div className='text-[var(--color-text)]'>...Loading</div>
        ) : products?.length > 0 ? (
          <ProductsList />
        ) : (
          <>
            <div className='mb-5 px-4'>
              <BackLink to={BackLinkHref}>Products</BackLink>
            </div>
            <h2 className='m-auto'>Posts not found...</h2>
          </>
        )}
      </section>
      {products.length > 0 && (
        <section>
          <Pagination
            setSearchParams={setSearchParams}
            totalPages={totalPages}
            currentPage={currentPage - 1}
          />
        </section>
      )}
    </div>
  );
};

export default ProductPage;
