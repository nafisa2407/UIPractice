import {combineReducers, configureStore} from '@reduxjs/toolkit';
import TodoReducer from './TodoSlice';
import ProductReducer from './ProductSlice';
import { persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage';
import FetchProductReducer from './FetchProductSlice';

const persistConfig = {
  key: 'root',
  storage : AsyncStorage
}

const rootReducer = combineReducers({
  todo: TodoReducer,
  product: ProductReducer,
  items: FetchProductReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const mystore = configureStore({
  reducer: persistedReducer
});
