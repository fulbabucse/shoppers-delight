import { combineReducers } from "redux";
import {
  categoryProductsReducer,
  detailsProductReducer,
  productQuantityReducer,
  productsReducers,
} from "./productsReducers";

export const reducers = combineReducers({
  products: productsReducers,
  product: detailsProductReducer,
  categoryProducts: categoryProductsReducer,
  quantity: productQuantityReducer,
});
