import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productIsAreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
  },
});

export const { addProduct } = cartSlice.actions;
