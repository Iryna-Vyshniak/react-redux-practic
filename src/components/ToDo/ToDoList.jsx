import { useSelector } from 'react-redux';

import { getStatusFilter, getToDo } from '../../../store/selectors';
import { statusFilters } from '../../../store/constants';
import { Task } from './Task';

const getVisibleTodo = (todo, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return todo.filter((task) => !task.completed);
    case statusFilters.completed:
      return todo.filter((task) => task.completed);
    default:
      return todo;
  }
};

export const ToDoList = () => {
  const todo = useSelector(getToDo);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTodo = getVisibleTodo(todo, statusFilter);

  return (
    <ul className='flex flex-col items-center justify-center list-none'>
      {visibleTodo.map((task) => (
        <li className='max-w-[1200px] w-full' key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
