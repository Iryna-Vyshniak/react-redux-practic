import { ToDoCounter } from './ToDoCounter';
import { FormFilterTodo } from './FormFilterTodo';

export const ToDoBar = () => {
  return (
    <header className='w-full max-w-[1200px] mx-0'>
      <div className='flex flex-col sm:flex-row justify-between'>
        <section className='grid gap-1 mb-6 sm:mb-0'>
          <h2 className='text-lg text-blue-700 font-semibold'>Tasks</h2>
          <ToDoCounter />
        </section>
        <section className='grid gap-1'>
          <h2 className='text-lg text-blue-700 font-semibold'>Filter by status</h2>
          <FormFilterTodo />
        </section>
      </div>
    </header>
  );
};
