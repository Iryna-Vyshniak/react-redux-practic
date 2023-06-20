import { SET_STATUS_FILTER } from './types';

export const setStatusFilter = (value) => {
  return {
    type: SET_STATUS_FILTER,
    payload: value,
  };
};
