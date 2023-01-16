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
  NAVBAR_NEW_PRODUCTS,
  PENDING_ORDERS,
  COMPLETE_PAYMENTS,
  ALL_USERS,
  PRODUCT_CATEGORIES,
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

export const navbarNewProducts = (products) => {
  return {
    type: NAVBAR_NEW_PRODUCTS,
    payload: products,
  };
};

export const pendingOrders = (products) => {
  return {
    type: PENDING_ORDERS,
    payload: products,
  };
};

export const completePayments = (payments) => {
  return {
    type: COMPLETE_PAYMENTS,
    payload: payments,
  };
};

export const allUsers = (users) => {
  return {
    type: ALL_USERS,
    payload: users,
  };
};

// Admin Dashboard
export const productCategories = (categories) => {
  return {
    type: PRODUCT_CATEGORIES,
    payload: categories,
  };
};
