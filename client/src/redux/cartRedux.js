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
    // Add Product
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
    // Add new product to list
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    //Delete single product
    deleteProduct: (state, action) => {
      state.isFetching = false;
      // splice(start index, # of delete): delete only 1 here
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload._id),
        1
      );
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.price * action.payload.quantity;
    },

    // Clear all products
    clearProduct: (state) => {
      state.products =[];
      state.quantity = 0;
      state.total = 0;
    }
  },
});

// export fuctions
export const { addProduct, clearProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
