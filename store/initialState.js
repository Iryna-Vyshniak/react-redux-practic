import { counterInitialState } from './counter/initialState';
import { filtersInitialState } from './filter/initialState';
import { todoInitialState } from './todo/initialState';

export const initialState = {
  counter: counterInitialState,
  todo: todoInitialState,
  filters: filtersInitialState,
};
