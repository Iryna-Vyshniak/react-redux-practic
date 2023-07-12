import { useState } from 'react';
import Select from 'react-select';
import typeProducts from '../../share/typeProducts.json';
import useForm from '../../share/hooks/useForm';
import { useDispatch } from 'react-redux';

const initialState = {
  name: '',
  type: null,
  description: '',
  price: 0,
  favorite: false,
};

const CreateProductsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch();
  };

  const { state, onChange, reset } = useForm({ initialState, onSubmit });

  const { name, type, description, price, favorite } = state;

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    onChange(name, newValue);
  };

  const handleSelectChange = (option) => {
    onChange('type', option);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set('favorite', state.favorite);
    onSubmit(data);
    reset();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className='max-w-md px-2 mx-auto '>
      <h1 className='text-3xl text-blue-700 text-center mt-6 mb-6 font-bold'>Add Product</h1>
      <form onSubmit={handleSubmit}>
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
          minLength='10'
          required
          onChange={handleInputChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
        />
        <p className='text-lg mt-6 font-semibold'>Favorite</p>
        <input
          type='checkbox'
          name='favorite'
          checked={favorite}
          value={price}
          min='1'
          max='400000000'
          required
          onChange={handleInputChange}
          className='form-checkbox mb-6  w-8 h-8 px-4 py-2 text-lg text-blue-600 border border-gray-300 rounded transition duration-200 ease-in-out shadow-lg shadow-red-100'
        />

        <p className='text-lg mt-6 font-semibold'>Price</p>
        <input
          type='number'
          name='price'
          value={price}
          min='1'
          max='400000000'
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
