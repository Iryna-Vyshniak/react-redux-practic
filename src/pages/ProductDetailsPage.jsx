import { BackLink } from '../components/BackLink';
import { getProductById } from '../../share/api/products-service';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  //  console.log(product);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img
        src={product.url}
        alt={product.name}
        className='h-[360px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in-out rounded-md'
        loading='lazy'
      />
      <div>
        <h2 className='p-1 mt-2 mb-0 text-black'>{product.name}</h2>
        <p>{product.type}</p>
        <p>{product.description}</p>
        <p>{product.price}$</p>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
