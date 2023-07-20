import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useCallback, useState } from 'react';
// import useForm from '../share/hooks/useForm';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  // const [state, setState] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false);
  //const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

  const [state, setState] = useState(initialState);

  const { email, password } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setState((prevState) => ({ ...prevState, formData }));
    onSubmit({ ...state });
    //reset();
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   handleChange(name, value);
  // };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label className='flex flex-col mb-4'>
        Email
        <input
          type='email'
          name='email'
          value={email}
          required
          onChange={handleInputChange}
          className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
        />
      </label>
      <label className='flex flex-col mb-4'>
        Password
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          value={password}
          required
          onChange={handleInputChange}
          className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
        />
        {showPassword ? (
          <AiFillEyeInvisible
            className='absolute right-3 top-3 text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        ) : (
          <AiFillEye
            className='absolute right-3 top-3 text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        )}
      </label>
      <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
        <p className='mb-6'>
          Don`t have an account?
          <Link
            to='/signup'
            className='ml-1 text-red-700 hover:text-red-600 transition-duration-200 ease-in-out'
          >
            Register
          </Link>
        </p>
      </div>
      <button
        type='submit'
        className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
