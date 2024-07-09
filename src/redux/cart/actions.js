import CartActionTypes from "./actions.types";

export const addProductToCard = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload,
  };
};

export const removeProductFromCard = (payload) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
  };
};

export const increaseProductQuantity = (payload) => {
  return {
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
  };
};

export const decreaseProductQuantity = (payload) => {
  return {
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
  };
};
