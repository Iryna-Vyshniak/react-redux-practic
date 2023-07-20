import { BackLink } from '../components/BackLink';
//import { getProductById } from '../../share/api/products-service';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductByIdThunk } from '../../store/products/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductDetails } from '../../store/products/selectors';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const dispatch = useDispatch();
  const product = useSelector(selectProductDetails);

  useEffect(() => {
    dispatch(getProductByIdThunk(id));
  }, [dispatch, id]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      {product && (
        <>
          {product.poster && (
            <img
              src={`http://localhost:3500/${product.poster}`}
              alt={product.name}
              className='h-[360px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in-out rounded-md'
              loading='lazy'
            />
          )}

          <div>
            <h2 className='p-1 mt-2 mb-0 text-black'>{product.name}</h2>
            <p>{product.type}</p>
            <p>{product.description}</p>
            <p>{product.price}$</p>
          </div>
        </>
      )}
      {/* {console.log(product)} */}
    </main>
  );
};

export default ProductDetailsPage;
