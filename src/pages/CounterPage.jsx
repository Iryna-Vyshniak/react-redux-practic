import { useDispatch, useSelector } from 'react-redux';
import { BsPlusCircle } from 'react-icons/bs';
import { SlMinus } from 'react-icons/sl';
import Step from '../components/Step';

const CounterPage = () => {
  //const [count, setCount] = useState(0);
  //const total = useSelector((state) => state.total);
  const { total, step } = useSelector((state) => state);

  const dispatch = useDispatch();

  const setCountIncr = () => {
    dispatch({ type: 'increment', payload: step });
  };
  const setCountDecr = () => {
    dispatch({ type: 'decrement', payload: step });
  };

  return (
    <>
      <Step />
      <h3 className='font-semibold text-3xl text-red-700 text-center mt-6'>{total}</h3>
      <div className='flex items-center justify-center w-full'>
        <button
          className='flex justify-center items-center mt-6 mb-6 mr-2 px-1 py-1 max-w-[150px] w-full h-[44px] bg-red-700 text-white rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-red-600 hover:shadow-md shadow-emerald-50'
          onClick={setCountIncr}
        >
          <BsPlusCircle color='#fff' size={32} />
        </button>
        <button
          className='flex justify-center items-center mt-6 mb-6 px-1 py-1 max-w-[150px] w-full h-[44px] bg-blue-700 text-white rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-blue-600 hover:shadow-md shadow-emerald-50'
          onClick={setCountDecr}
        >
          <SlMinus color='#fff' size={30} />
        </button>
      </div>
    </>
  );
};

export default CounterPage;
