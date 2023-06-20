import { ToDoCounter } from './ToDoCounter';
import { FormFilterTodo } from './FormFilterTodo';

export const ToDoBar = () => {
  return (
    <header className='flex justify-between w-full max-w-[1200px] mx-0'>
      <section className='grid gap-1'>
        <h2 className='text-lg text-blue-700 font-semibold'>Tasks</h2>
        <ToDoCounter />
      </section>
      <section className='grid gap-1'>
        <h2 className='text-lg text-blue-700 font-semibold'>Filter by status</h2>
        <FormFilterTodo />
      </section>
    </header>
  );
};
