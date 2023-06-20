import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: state.total + action.payload,
      };
    case 'decrement':
      return {
        ...state,
        total: state.total - action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, { total: 0, users: [] });

//console.log(store.getState()); // {total: 0} => useSelector(state => state.total)
// store.dispatch({type: 'increment', payload: 1}); => useDispatch(action)
/* 
store:
Object
@@observable: ƒ observable()
dispatch: ƒ dispatch(action) // => setState
getState: ƒ getState() // => state
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener)
[[Prototype]]: Object */
