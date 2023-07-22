import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import useForm from '../share/hooks/useForm';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  //const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

  const [state, setState] = useState({ ...initialState });
  const { name, email, password } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setState((prevState) => ({ ...prevState, formData }));
    console.log(state);
    onSubmit({ ...state });
    //reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label className='flex flex-col mb-4'>
        Name
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleInputChange}
          className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
        />
      </label>
      <label className='flex flex-col mb-4'>
        Email
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleInputChange}
          className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
        />
      </label>
      <label className='relative flex flex-col mb-4'>
        Password
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          value={password}
          onChange={handleInputChange}
          className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
        />
        {showPassword ? (
          <AiFillEyeInvisible
            className='absolute right-3 top-[40%] text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        ) : (
          <AiFillEye
            className='absolute right-3 top-[40%] text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        )}
      </label>
      <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
        <p className='mb-6'>
          Have an account?
          <Link
            to='/signin'
            className='ml-1 text-red-700 hover:text-red-600 transition-duration-200 ease-in-out'
          >
            Sign in
          </Link>
        </p>
      </div>
      <button
        type='submit'
        className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
