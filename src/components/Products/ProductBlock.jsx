import { useDispatch } from 'react-redux';
import { ProductsList } from './ProductsList';
import { useEffect } from 'react';
import { getAllProductsThunk } from '../../../store/products/thunks';

export const ProductBlock = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getAllProductsThunk());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};
