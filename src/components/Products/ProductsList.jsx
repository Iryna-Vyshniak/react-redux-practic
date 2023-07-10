import { Link, useLocation } from 'react-router-dom';

export const ProductsList = ({ products }) => {
  const location = useLocation();

  return (
    <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {products.map((product) => (
        <li
          key={product.id}
          className='relative bg-white flex flex-col justify-between items-center m-[10px] shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-200 ease-in-out'
        >
          <Link to={`${product.id}`} state={{ from: location }}>
            <img
              src={product.url}
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
