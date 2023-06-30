import { useReducer } from "react";
 // Здесь будет Reducer с экшенами. Далее все по порядку

 const initialstate = {count: 0};

 function reducer (state, action){
  switch (action.type){
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
      case 'decrement':
        return {
          ...state,
          count: state.count - 1,
        };
        case 'reset':
          return {
            ...state,
            count: state.count = 0,
          };
      default:
        throw new Error();
  }
 }

 const initialstateName = {name: ''};

 function reducerName (state, action){
  switch (action.type){
    case 'add':
      return {
        ...state,
        name: 'Igor',
      };
      case 'change':
        return {
          ...state,
          name: state.name + ' Sergey',
        };
        case 'reset':
          return {
            ...state,
            name: '',
          };
      default:
        throw new Error();
  }
 }

 export {reducer, initialstate, reducerName, initialstateName};