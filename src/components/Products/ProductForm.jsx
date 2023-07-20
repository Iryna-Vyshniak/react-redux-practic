import Select from 'react-select';
import useForm from '../../share/hooks/useForm';
import { initialState } from './InitialState';
import typeProducts from '../../share/typeProducts.json';
import { useEffect, useState } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
// import { BackLink } from '../BackLink';
// import { useLocation } from 'react-router-dom';

export const ProductForm = ({ onSubmit }) => {
  const [path, setPath] = useState('');
  const [file, setFile] = useState(null);

  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/products';

  const handlePoster = (e) => {
    const poster = e.target.files[0];
    // console.log(poster);

    if (!poster || !poster.type.includes('image')) {
      setFile(null);
      setPath('');
      return;
    }

    setFile(poster);
  };

  // Використовуємо useEffect для відстеження оновлення значення file
  useEffect(() => {
    // console.log('File updated:', file);
    if (file) {
      setPath(URL.createObjectURL(file));
    }
  }, [file]);
  // ------- with custom hook useForm ---------------

  // const { state, handleChange, reset } = useForm({ initialState, onSubmit });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   formData.set('favorite', state.favorite);
  //   onSubmit(formData);
  //   reset();
  // };

  // const { name, type, description, price, favorite } = state;

  // const handleInputChange = (e) => {
  //   const { name, value, checked, type } = e.target;
  //   const newValue = type === 'checkbox' ? checked : value;
  //   // console.log(name, newValue);
  //   handleChange(name, newValue);
  // };

  // const handleSelectChange = (option) => {
  //   console.log(option);
  //   handleChange('type', option);
  // };

  // ---- without custom hook useForm() ------------------------------

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
  }

  return (
    <>
      {/* <BackLink to={backLinkHref}>hide form</BackLink> */}
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <label className='text-lg font-semibold'>
          Name
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            maxLength='37'
            minLength='3'
            required
            onChange={handleInputChange}
            className='w-full px-4 py-2 text-lg text-gray-700 bg-sky-50 border-2 border-white rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
          />
        </label>
        <label className='text-lg font-semibold'>
          Type
          <Select
            name='type'
            value={type}
            onChange={handleSelectChange}
            options={typeProducts}
            className='w-full px-4 py-2 text-lg text-gray-700 bg-sky-50 border-2 border-white rounded transition duration-200 ease-in-out mb-6 shadow-lg shadow-red-100'
          />
        </label>
        <label className='text-lg font-semibold'>
          Description
          <textarea
            type='text'
            name='description'
            value={description}
            placeholder='Description'
            required
            onChange={handleInputChange}
            className='w-full px-4 py-2 text-lg text-gray-700 bg-sky-50 border-2 border-white rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
          />
        </label>
        <div>
          <p className='text-lg font-semibold'>Image</p>
          <div
            className='relative z-10 flex items-center justify-center w-full h-[360px] px-4 py-2 border-2 border-white rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
            style={{
              backgroundImage: path ? `url(${path})` : 'none',
              backgroundColor: path ? 'transparent' : 'rgb(240 249 255 / 1)', // Змінено на 'blue', щоб встановити блакитний колір
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <label>
              {!file && (
                <MdOutlineAddPhotoAlternate className='w-8 h-8 text-blue-600 self-center' />
              )}
              <input
                onChange={handlePoster}
                type='file'
                name='poster'
                placeholder='Add photo'
                required
              />
            </label>
          </div>
        </div>
        <label className='text-lg mt-6 font-semibold'>
          Favorite
          <input
            type='checkbox'
            name='favorite'
            checked={favorite}
            onChange={handleInputChange}
            className='block form-checkbox mb-6  w-8 h-8 px-4 py-2 text-lg text-blue-600 bg-sky-50 border-2 border-white rounded transition duration-200 ease-in-out shadow-lg shadow-red-100'
          />
        </label>
        <label className='text-lg mt-6 font-semibold'>
          Price
          <input
            type='number'
            name='price'
            value={price}
            min='1'
            max='40000'
            required
            onChange={handleInputChange}
            className='w-full px-4 py-2 text-lg text-gray-700 bg-sky-50 border-2 border-white rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6 shadow-lg shadow-red-100'
          />
        </label>
        <button
          type='submit'
          className='mb-6 w-full px-7 py-3 bg-blue-700 text-white font-medium text-sm uppercase shadow-lg rounded  hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out'
        >
          Create product
        </button>
      </form>
    </>
  );
};
