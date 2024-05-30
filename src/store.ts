import {configureStore } from '@reduxjs/toolkit';
import productInfoReducer from './productInfoSlice';

export type SaleInfo = {
  "weekEnding": string;
  "retailSales": number;
  "wholesaleSales": number;
  "unitsSold": number;
  "retailerMargin": number;
};
export interface ProductInfo {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
  sales: SaleInfo[];
}

const store = configureStore({
  reducer: {
    productInfo: productInfoReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;