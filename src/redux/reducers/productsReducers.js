import {
  CATEGORY_PRODUCTS,
  DETAILS_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const detailsProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAILS_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

const initialCategoryProductsState = {
  categoryProducts: [],
};

export const categoryProductsReducer = (
  state = initialCategoryProductsState,
  action
) => {
  switch (action.type) {
    case CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProducts: action.payload,
      };
    default:
      return state;
  }
};
