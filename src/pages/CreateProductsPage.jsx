// import { useState } from 'react';
import Select from 'react-select';
import typeProducts from '../../share/typeProducts.json';
import useForm from '../../share/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../store/products/selectors';
import { addProductThunk } from '../../store/products/thunks';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  type: null,
  description: '',
  price: 0,
  favorite: false,
};

const CreateProductsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   // console.log('submit', data);
  //   // for (const [key, value] of data.entries()) {
  //   //   console.log(`${key}: ${value}`);
  //   // }
  //   dispatch(addProductThunk(data));
  // };

  const { state, handleChange, reset } = useForm({ initialState });

  const { name, type, description, price, favorite } = state;

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    // console.log(name, newValue);
    handleChange(name, newValue);
  };

  const handleSelectChange = (option) => {
    console.log(option);
    handleChange('type', option);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    //const data = Object.fromEntries(formData.entries());
    //  console.log('handle submit data', data);
    //data.favorite = {state.favorite };
    // or
    // formData.append('name', name);
    // formData.append('type', type);
    // formData.append('description', description);
    // formData.append('price', price);
    formData.set('favorite', state.favorite);
    // onSubmit(formData);
    dispatch(addProductThunk({ ...formData }));
    reset();
    navigate('/list-products');
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className='max-w-md px-2 mx-auto '>
      <h1 className='text-3xl text-blue-700 text-center mt-6 mb-6 font-bold'>Add Product</h1>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <p className='text-lg font-semibold'>Name</p>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          maxLength='37'
          minLength='3'
          required
          onChange={handleInputChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
        />

        <p className='text-lg font-semibold'>Type</p>
        <Select
          name='type'
          value={type}
          onChange={handleSelectChange}
          options={typeProducts}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out mb-6 shadow-lg shadow-red-100'
        />

        <p className='text-lg font-semibold'>Description</p>
        <textarea
          type='text'
          name='description'
          value={description}
          placeholder='Description'
          required
          onChange={handleInputChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
        />

        <p className='text-lg font-semibold'>Image</p>
        <input
          type='file'
          name='photo'
          placeholder='Add photo'
          required
          onChange={handleInputChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
        />
        <p className='text-lg mt-6 font-semibold'>Favorite</p>
        <input
          type='checkbox'
          name='favorite'
          checked={favorite}
          onChange={handleInputChange}
          className='form-checkbox mb-6  w-8 h-8 px-4 py-2 text-lg text-blue-600 border border-gray-300 rounded transition duration-200 ease-in-out shadow-lg shadow-red-100'
        />

        <p className='text-lg mt-6 font-semibold'>Price</p>
        <input
          type='number'
          name='price'
          value={price}
          min='1'
          max='40000'
          required
          onChange={handleInputChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
        />

        <button
          type='submit'
          className='mb-6 w-full px-7 py-3 bg-blue-700 text-white font-medium text-sm uppercase shadow-lg rounded  hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out'
        >
          Create product
        </button>
      </form>
    </main>
  );
};

export default CreateProductsPage;
