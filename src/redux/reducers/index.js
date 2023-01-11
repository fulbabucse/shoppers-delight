import { combineReducers } from "redux";
import {
  cartProductsReducer,
  categoryProductsReducer,
  detailsProductReducer,
  latestArticleReducer,
  navbarNewProductsReducer,
  productQuantityReducer,
  similarProductsReducer,
  topProductsReducer,
} from "./productsReducers";

export const reducers = combineReducers({
  product: detailsProductReducer,
  categoryProducts: categoryProductsReducer,
  quantity: productQuantityReducer,
  topProducts: topProductsReducer,
  articles: latestArticleReducer,
  similarProducts: similarProductsReducer,
  cartProducts: cartProductsReducer,
  newProducts: navbarNewProductsReducer,
});
