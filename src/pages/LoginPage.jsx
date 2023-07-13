import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { loginThunk } from '../../store/auth/thunk';
import { verify } from '../../share/api/auth-service';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const verificationToken = searchParams.get('verificationToken');

  // console.log(verificationToken);

  useEffect(() => {
    const verifyReqest = async () => {
      try {
        await verify(verificationToken);
      } catch (error) {
        console.log(error.message);
      } finally {
        setSearchParams({});
      }
    };
    if (verificationToken) {
      verifyReqest();
    }
  }, [setSearchParams, verificationToken]);

  const onLogin = (data) => {
    dispatch(loginThunk(data));
  };

  return (
    <section>
      <div className='flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            src='https://images.unsplash.com/photo-1677951570313-b0750351c461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
            alt='key'
            className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          {!verificationToken && <LoginForm onSubmit={onLogin} />}
        </div>
      </div>
    </section>
  );
};
