import {
  CART_PRODUCT,
  CATEGORY_PRODUCTS,
  DETAILS_PRODUCT,
  LATEST_ARTICLE,
  QUANTITY_DECREMENT,
  QUANTITY_INCREMENT,
  REMOVE_SELECTED_PRODUCT,
  SIMILAR_PRODUCTS,
  TOP_PRODUCTS,
} from "../actionTypes/actionTypes";

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

const initialQuantityState = {
  quantity: 1,
};

export const productQuantityReducer = (
  state = initialQuantityState,
  action
) => {
  switch (action.type) {
    case QUANTITY_INCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case QUANTITY_DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};

const initialTopProductsState = {
  topProducts: [],
};

export const topProductsReducer = (state = initialTopProductsState, action) => {
  switch (action.type) {
    case TOP_PRODUCTS:
      return {
        ...state,
        topProducts: action.payload,
      };
    default:
      return state;
  }
};

const initialArticleState = {
  articles: [],
};
export const latestArticleReducer = (state = initialArticleState, action) => {
  switch (action.type) {
    case LATEST_ARTICLE:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

const initialSimilarProductState = {
  similarProducts: [],
};

export const similarProductsReducer = (
  state = initialSimilarProductState,
  action
) => {
  switch (action.type) {
    case SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProducts: action.payload,
      };
    default:
      return state;
  }
};

const initialCartState = {
  cartProducts: [],
};

export const cartProductsReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CART_PRODUCT:
      return {
        ...state,
        cartProducts: action.payload,
      };
    default:
      return state;
  }
};
