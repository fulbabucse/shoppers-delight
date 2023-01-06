import { combineReducers } from "redux";
import {
  categoryProductsReducer,
  detailsProductReducer,
  productsReducers,
} from "./productsReducers";

export const reducers = combineReducers({
  products: productsReducers,
  product: detailsProductReducer,
  categoryProducts: categoryProductsReducer,
});
