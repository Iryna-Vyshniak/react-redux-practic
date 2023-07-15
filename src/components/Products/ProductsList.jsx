import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  selectError,
  selectFilteredProducts,
  selectIsLoading,
} from '../../../store/products/selectors';
import { useEffect } from 'react';
import { getAllProductsThunk } from '../../../store/products/thunks';

export const ProductsList = () => {
  const location = useLocation();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const filteredProducts = useSelector(selectFilteredProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  return (
    <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {filteredProducts.map((product) => (
        <li
          key={product._id}
          className='relative bg-white flex flex-col justify-between items-center m-[10px] p-4 shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-200 ease-in-out'
        >
          <Link to={`${product._id}`} state={{ from: location }}>
            <img
              src={product.poster}
              alt={product.name}
              className='h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in-out rounded-md'
              loading='lazy'
            />
            <h3 className='p-1 mt-2 mb-0 text-black'>{product.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
