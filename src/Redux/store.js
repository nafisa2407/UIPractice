import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from './TodoSlice';
import ProductReducer from './ProductSlice';
export const mystore = configureStore({
  reducer: {
    todo: TodoReducer,
    product: ProductReducer,
  },
});
