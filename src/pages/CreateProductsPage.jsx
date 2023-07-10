import { useState } from 'react';
import Select from 'react-select';
import typeProducts from '../../share/typeProducts.json';

const CreateProductsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    type: null,
    description: '',
    url: '',
    price: 0,
  });

  const { name, type, description, url, price } = formData;

  function onChange(e) {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  }

  function onSelectChange(option) {
    setFormData((prevState) => ({ ...prevState, type: option }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className='max-w-md px-2 mx-auto '>
      <h1 className='text-3xl text-blue-700 text-center mt-6 mb-6 font-bold'>Add Product</h1>
      <form onSubmit={onSubmit}>
        <p className='text-lg font-semibold'>Name</p>
        <input
          type='text'
          id='name'
          value={name}
          placeholder='Name'
          maxLength='37'
          minLength='10'
          required
          onChange={onChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6'
        />

        <p className='text-lg font-semibold'>Type</p>
        <Select
          id='type'
          value={type}
          onChange={onSelectChange}
          options={typeProducts}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out mb-6'
        />

        <p className='text-lg font-semibold'>Description</p>
        <textarea
          type='text'
          id='description'
          value={description}
          placeholder='Description'
          required
          onChange={onChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6'
        />

        <p className='text-lg font-semibold'>Image</p>
        <input
          type='text'
          id='url'
          value={url}
          placeholder='Add url'
          maxLength='37'
          minLength='10'
          required
          onChange={onChange}
          className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6'
        />
        <div>
          <p className='text-lg mt-6 font-semibold'>Price</p>
          <div className='flex w-full justify-center items-center space-x-6'>
            <input
              type='number'
              id='price'
              value={price}
              min='1'
              max='400000000'
              required
              onChange={onChange}
              className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6'
            />
          </div>
        </div>

        <button
          type='submit'
          className='mb-6 w-full px-7 py-3 bg-blue-700 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out'
        >
          Create product
        </button>
      </form>
    </main>
  );
};

export default CreateProductsPage;
