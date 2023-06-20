import { ToDoBar } from '../components/ToDo/ToDoBar';
import { ToDoForm } from '../components/ToDo/ToDoForm';
import { ToDoList } from '../components/ToDo/ToDoList';

const ToDoPage = () => {
  return (
    <div className='grid gap-4 mx-auto px-3 py-3 w-full max-w-[1200px]'>
      <ToDoBar />
      <ToDoForm />
      <ToDoList />
    </div>
  );
};

export default ToDoPage;
