import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "../actionTypes/actionTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (productId) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: productId,
  };
};
