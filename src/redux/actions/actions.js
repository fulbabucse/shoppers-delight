import {
  SET_PRODUCTS,
  DETAILS_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  CATEGORY_PRODUCTS,
  QUANTITY_INCREMENT,
  QUANTITY_DECREMENT,
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

export const categoryProducts = (products) => {
  return {
    type: CATEGORY_PRODUCTS,
    payload: products,
  };
};

export const quantityIncrement = () => {
  return {
    type: QUANTITY_INCREMENT,
  };
};

export const quantityDecrement = () => {
  return {
    type: QUANTITY_DECREMENT,
  };
};
