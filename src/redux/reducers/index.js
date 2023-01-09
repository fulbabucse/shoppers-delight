import { combineReducers } from "redux";
import {
  categoryProductsReducer,
  detailsProductReducer,
  latestArticleReducer,
  productQuantityReducer,
  productsReducers,
  similarProductsReducer,
  topProductsReducer,
} from "./productsReducers";

export const reducers = combineReducers({
  products: productsReducers,
  product: detailsProductReducer,
  categoryProducts: categoryProductsReducer,
  quantity: productQuantityReducer,
  topProducts: topProductsReducer,
  articles: latestArticleReducer,
  similarProducts: similarProductsReducer,
});
