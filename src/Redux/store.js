import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from './TodoSlice';
export const mystore = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
