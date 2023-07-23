import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllProductsThunk } from '../../store/products/thunks';
import { Pagination } from '../Pagination';
import { selectCurrentPage, selectTotalPages } from '../../store/products/selectors';

export const ProductsList = ({ products, page, setSearchParams }) => {
  const location = useLocation();
  // console.log('PRODUCTS', products);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  // console.log('PAGES', totalPages);
  // console.log('PAGE', page);

  useEffect(() => {
    try {
      dispatch(getAllProductsThunk(page));
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, page]);

  return (
    <>
      {products?.length > 0 && (
        <>
          <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {products?.map((product) => (
              <li
                key={product._id}
                className='flex flex-col justify-between items-center m-[10px] p-4 bg-white shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-200 ease-in-out'
              >
                <Link to={`${product._id}`} state={{ from: location }} className='contents'>
                  {product.poster && (
                    <img
                      src={`https://simple-products-backend.onrender.com/${product.poster}`}
                      alt={product.name}
                      className='h-[170px] w-full object-contain hover:scale-105 transition-scale duration-200 ease-in-out rounded-md'
                      loading='lazy'
                    />
                  )}
                  <div className='w-full'>
                    <h3 className='mt-2 text-black'>{product.name}</h3>
                    <div className='flex space-x-2 items-center justify-between'>
                      <p className='text-blue-600 text-xs'>{product.createdAt.split('T')[0]}</p>
                      <div className='flex space-x-2 items-center'>
                        {product.owner.avatarUrl && (
                          <img
                            src={`https://simple-products-backend.onrender.com/${product.owner.avatarUrl}`}
                            alt={product.owner.name}
                            className='h-5 w-5 object-cover hover:scale-105 transition-scale duration-200 ease-in-out rounded-full'
                            loading='lazy'
                          />
                        )}
                        <p className='text-blue-600 text-xs uppercase'>{product.owner.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination
            setSearchParams={setSearchParams}
            totalPages={totalPages}
            currentPage={currentPage - 1}
          />
        </>
      )}
    </>
  );
};
