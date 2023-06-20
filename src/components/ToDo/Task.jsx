import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from '../../../store/todo/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className='flex items-center space-x-4 max-w-6xl mx-auto px-3 py-3'>
      <input
        type='checkbox'
        className='flex justify-center items-center rounded w-[24px] h-[24px] cursor-pointer'
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className='flex-grow'>{task.text}</p>
      <button
        className='flex justify-center items-center mt-6 mb-6 mr-2 px-1 py-1 w-[28px] h-[28px] bg-red-700 text-white rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-red-600 hover:shadow-md shadow-emerald-50 '
        onClick={handleDelete}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
