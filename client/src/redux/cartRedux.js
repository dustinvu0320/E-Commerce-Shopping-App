import { createSlice } from "@reduxjs/toolkit";

// Create Redux state
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
    // Add new product to list
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearProduct: (state) => {
      state.products =[];
      state.quantity = 0;
      state.total = 0;
    }
  },
});

// export fuctions
export const { addProduct, clearProduct } = cartSlice.actions;
export default cartSlice.reducer;
