import {configureStore } from '@reduxjs/toolkit';
import productInfoReducer from './productInfoSlice';

const store = configureStore({
  reducer: {
    productInfo: productInfoReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;