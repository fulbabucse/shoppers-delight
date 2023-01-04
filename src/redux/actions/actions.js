import {
  SET_PRODUCTS,
  DETAILS_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "../actionTypes/actionTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const detailsProduct = (product) => {
  return {
    type: DETAILS_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
