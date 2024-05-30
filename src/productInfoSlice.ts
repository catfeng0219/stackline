import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ProductInfo} from './store';

const initialState: ProductInfo = {
  title: '',
  image: '',
  subtitle: '',
  tags: [],
  sales: [],
};

const productInfoSlice = createSlice({
  name: 'productInfo',
  initialState,
  reducers: {
    setProductInfo: (_, action: PayloadAction<ProductInfo>) => {
      return action.payload;
    },
  },
});

export const {setProductInfo} = productInfoSlice.actions;
export default productInfoSlice.reducer;
