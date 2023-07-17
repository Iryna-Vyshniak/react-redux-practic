import { useState, useCallback } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    (name, value) => {
      setState((prevState) => ({ ...prevState, [name]: value }));
    },
    [setState]
  );

  const reset = useCallback(() => setState({ ...initialState }), [initialState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('state', state);
    console.log({ ...state });
    onSubmit({ ...state });
    reset();
  };

  return { state, setState, handleChange, handleSubmit, reset };
};

export default useForm;
