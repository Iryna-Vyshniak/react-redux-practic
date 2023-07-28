import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/Products/SearchBox';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectProducts, selectTotalPages } from '../store/products/selectors';
import { ProductsList } from '../components/Products/ProductsList';
import { Pagination } from '../components/Pagination';
import { getProductsByQueryThunk } from '../store/products/thunks';

const ProductPage = () => {
  // const [showForm, setShowForm] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ name: '', page: 1 });
  // console.log(useSearchParams());
  //const { path } = history.location;

  let productName = searchParams.get('name') ?? '';
  const page = Number(searchParams.get('page') || 1);
  // console.log('PAGE: ', page, typeof page);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const dispatch = useDispatch();

  // const toggleForm = () => {
  //   setShowForm((prevState) => !prevState);
  // };

  const location = useLocation();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProductsByQueryThunk(productName));
  }, [dispatch, productName]);

  useEffect(() => {
    const visibleProducts = products?.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
    setFilteredProducts(visibleProducts);
  }, [productName, products]);

  const handleSearchChange = ({ target }) => {
    const inputValue = target.value;
    productName = inputValue;
    setSearchParams({ page: 1, name: productName });
  };

  // const updateQueryString = (name) => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <div className='flex flex-col items-center justify-between min-h-[85vh]'>
      <section className='flex flex-col items-center space-x-3 flex-1'>
        <div className='flex items-center space-x-3'>
          <SearchBox value={productName} onChange={handleSearchChange} />

          <NavLink to={'add-product'} state={location.state}>
            Add product
          </NavLink>
          {/* {!showForm && <SearchBox value={productName} onChange={handleSearchChange} />}

          <NavLink to={showForm ? ' ' : 'add-product'} state={location.state} onClick={toggleForm}>
            {showForm ? 'Hide form' : 'Add product'}
          </NavLink> */}
        </div>

        <ProductsList products={filteredProducts} page={page} />
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
