import { useDispatch } from 'react-redux';

import { addTask } from '../../../store/todo/actions';
import { Button } from './Button';

export const ToDoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className='flex items-center space-x-4 w-full max-w-[1200px]' onSubmit={handleSubmit}>
      <input
        className='flex-grow px-2 py-0 w-full h-[44px] rounded-md border-blue-600 focus:border-blue-700'
        type='text'
        name='text'
        placeholder='Enter task text...'
      />
      <Button
        type='submit'
        className='flex justify-center items-center mt-6 mb-6 mr-2 px-1 py-1 max-w-[150px] w-full h-[44px] bg-red-700 text-white rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-red-600 hover:shadow-md shadow-emerald-50'
      >
        Add task
      </Button>
    </form>
  );
};
