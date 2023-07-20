// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../store/products/selectors';
import { addProductThunk } from '../../store/products/thunks';
import { useNavigate } from 'react-router-dom';
import { ProductForm } from '../components/Products/ProductForm';

const CreateProductsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  const sendFormData = (data) => {
    // for (const [key, value] of data.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    // const product = Object.fromEntries(data.entries());
    // console.log('handle submit data', product);
    // console.log(typeof data);
    dispatch(addProductThunk(data));
    navigate('/products');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className='max-w-md px-2 mx-auto '>
      <h1 className='text-3xl text-blue-700 text-center mt-6 mb-6 font-bold'>Add Product</h1>
      <ProductForm onSubmit={sendFormData} />
    </main>
  );
};

export default CreateProductsPage;
