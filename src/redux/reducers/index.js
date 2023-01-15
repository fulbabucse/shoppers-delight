import { combineReducers } from "redux";
import {
  cartProductsReducer,
  categoryProductsReducer,
  completePaymentsReducer,
  detailsProductReducer,
  latestArticleReducer,
  navbarNewProductsReducer,
  pendingOrdersReducer,
  productQuantityReducer,
  similarProductsReducer,
  topProductsReducer,
  usersReducer,
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
  pendingOrders: pendingOrdersReducer,
  completePayments: completePaymentsReducer,
  users: usersReducer,
});
