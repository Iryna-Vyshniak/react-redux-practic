import Select from 'react-select';
// import useForm from '../../../share/hooks/useForm';
import { initialState } from './InitialState';
import typeProducts from '../../../share/typeProducts.json';
import { useState } from 'react';

export const ProductForm = ({ onSubmit }) => {
  //   const { state, handleChange, reset } = useForm({ initialState, onSubmit });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     formData.set('favorite', state.favorite);
  //     onSubmit(formData);
  //     reset();
  //   };

  //   const { name, type, description, price, favorite } = state;

  //   const handleInputChange = (e) => {
  //     const { name, value, checked, type } = e.target;
  //     const newValue = type === 'checkbox' ? checked : value;
  //     // console.log(name, newValue);
  //     handleChange(name, newValue);
  //   };

  //   const handleSelectChange = (option) => {
  //     console.log(option);
  //     handleChange('type', option);
  //   };

  const [state, setState] = useState(initialState);

  const { name, type, description, price, favorite } = state;

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSelectChange = (option) => {
    //console.log(option);
    setState((prevState) => ({ ...prevState, type: option }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set('favorite', state.favorite);
    onSubmit(formData);
    //reset();
  }

  return (
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
  );
};
