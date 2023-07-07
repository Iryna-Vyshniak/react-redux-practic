import { createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer);

// ----------------- 2nd opt variant --------------------------
// const initialState = {
//   counter: { total: 0, step: 1 },
//   todo: { todo: [] },
// };

//export const store = createStore(reducer, initialState);
// export const store = createStore(reducer, { counter: { total: 0, step: 1 }, todo: { todo: [] } });

// ----------------- 1st variant --------------------------

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         total: state.total + action.payload,
//       };
//     case 'decrement':
//       return {
//         ...state,
//         total: state.total - action.payload,
//       };
//     case 'setStep':
//       return {
//         ...state,
//         step: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const store = createStore(reducer, { total: 0, step: 1 });

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
