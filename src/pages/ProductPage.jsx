import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/Products/SearchBox';
import { ProductsList } from '../components/Products/ProductsList';
import { getProducts } from '../../share/api/productsAPI';

const ProductPage = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductsList products={visibleProducts} />
    </main>
  );
};

export default ProductPage;
