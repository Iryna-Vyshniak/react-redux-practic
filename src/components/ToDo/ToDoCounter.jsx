import { useSelector } from 'react-redux';
import { getToDo } from '../../store/selectors';

export const ToDoCounter = () => {
  const todo = useSelector(getToDo);

  const count = todo.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className='m-0 text-[var(--color-text)]'>Active: {count.active}</p>
      <p className='m-0 text-[var(--color-text)]'>Completed: {count.completed}</p>
    </div>
  );
};
