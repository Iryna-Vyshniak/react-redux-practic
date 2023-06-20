import { ToDoBar } from '../components/ToDo/ToDoBar';
import { ToDoForm } from '../components/ToDo/ToDoForm';
import { ToDoList } from '../components/ToDo/ToDoList';

const ToDoPage = () => {
  return (
    <div className='grid gap-4 mx-auto px-3 py-3 w-full'>
      <ToDoBar />
      <ToDoForm />
      <ToDoList />
    </div>
  );
};

export default ToDoPage;
