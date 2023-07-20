import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../store/counter/counterSlice';
// import { setStep } from '../../store/counter/actions';

const Step = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.counter);
  //console.log(step);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.step;
    // dispatch({ type: 'setStep', payload: Number(value) });
    dispatch(setStep(Number(value)));
  };

  return (
    <form
      className='flex justify-center items-center mt-2 mb-40 mx-auto max-w-[360px] w-full h-[44px]'
      role='search'
      onSubmit={handleSubmit}
    >
      <input
        className='rounded border-blue-600'
        type='number'
        name='step'
        placeholder='step'
        defaultValue={step}
      />
      <button
        className='flex justify-center items-center ml-2 px-2 py-2 max-w-[350px] w-full h-[44px] bg-red-700 text-white rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-red-600 hover:shadow-md shadow-emerald-50'
        type='submit'
      >
        Set Step
      </button>
    </form>
  );
};

export default Step;
