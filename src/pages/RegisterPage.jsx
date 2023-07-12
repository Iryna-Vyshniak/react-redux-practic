import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { signUp } from '../../share/api/auth-service';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegister = async (data) => {
    // console.log(data);
    try {
      await signUp(data);
      navigate('/signin');
    } catch (error) {
      console.log(error.message);
    }
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
          <RegisterForm onSubmit={onRegister} />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
