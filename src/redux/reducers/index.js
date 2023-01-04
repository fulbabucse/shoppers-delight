import { combineReducers } from "redux";
import { productsReducers } from "./productsReducers";

export const reducers = combineReducers({
  products: productsReducers,
});
