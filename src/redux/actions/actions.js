import {
  DETAILS_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  CATEGORY_PRODUCTS,
  QUANTITY_INCREMENT,
  QUANTITY_DECREMENT,
  TOP_PRODUCTS,
  LATEST_ARTICLE,
  SIMILAR_PRODUCTS,
  CART_PRODUCT,
} from "../actionTypes/actionTypes";

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

export const topProducts = (products) => {
  return {
    type: TOP_PRODUCTS,
    payload: products,
  };
};

export const latestArticle = (articles) => {
  return {
    type: LATEST_ARTICLE,
    payload: articles,
  };
};

export const similarProducts = (products) => {
  return {
    type: SIMILAR_PRODUCTS,
    payload: products,
  };
};

export const cartProducts = (products) => {
  return {
    type: CART_PRODUCT,
    payload: products,
  };
};
