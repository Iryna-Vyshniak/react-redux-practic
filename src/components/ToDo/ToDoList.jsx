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
    <ul className='list-none'>
      {visibleTodo.map((task) => (
        <li className='border-t border-gray-400' key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
