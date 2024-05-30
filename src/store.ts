import {createSlice, configureStore} from '@reduxjs/toolkit';

export type SalesInfo = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type StoreState = {
  title: string,
  image: string,
  subtitle: string,
  tags: string[],
  sales: SalesInfo[],
}

const initialState: StoreState = {
  title: '',
  image: '',
  subtitle: '',
  tags: [],
  sales: [],
};

const slice = createSlice({
  name: 'productInfo',
  initialState,
  reducers: {
    setData: (state, action) => {
      const {title, image, subtitle, sales} = action.payload;
      state.title = title;
      state.image = image;
      state.subtitle = subtitle;
      state.sales = sales;
    },
  },
});

export const {setData} = slice.actions;

const store = configureStore({
  reducer: {
    productInfo: slice.reducer,
  },
});

export default store;