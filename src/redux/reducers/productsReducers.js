import { SET_PRODUCTS } from "../actionTypes/actionTypes";

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
