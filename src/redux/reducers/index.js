import { combineReducers } from "redux";
import { detailsProductReducer, productsReducers } from "./productsReducers";

export const reducers = combineReducers({
  products: productsReducers,
  product: detailsProductReducer,
});
