import CartActionTypes from "./actions.types";

export const addProductToCard = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload
  }
}