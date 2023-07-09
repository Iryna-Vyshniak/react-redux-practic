import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';
import { statusFilters } from '../../../store/constants';
//  import { setStatusFilter } from '../../../store/filter/actions';
import { setStatusFilter } from '../../../store/filter/filterSlice';
import { getStatusFilter } from '../../../store/selectors';

export const FormFilterTodo = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className='flex space-x-4'>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
