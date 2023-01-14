import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ProductLayout from "../Layout/ProductLayout";
import AllProducts from "../Pages/Products/AllProducts";
import Home from "../Pages/Home/Home";
import CategoryProducts from "../Pages/Shared/CategoryProducts";
import ProductDetails from "../Pages/Shared/ProductDetails";
import SignIn from "../Pages/User/SignIn";
import SignUp from "../Pages/User/SignUp";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import TopCategoryProducts from "../Pages/Products/TopCategoryProducts";
import Payments from "../Pages/Payments/Payments";
import PaymentSuccess from "../Pages/Payments/PaymentSuccess";
import AccountSettings from "../Pages/User/Accounts/AccountSettings";
import Invoice from "../components/Invoice";
import BillingAddress from "../Pages/Payments/BillingAddress";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "products",
        element: <ProductLayout />,
        children: [
          { path: "/products", element: <AllProducts /> },
          {
            path: "/products/category/:name",
            element: <CategoryProducts />,
          },
        ],
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      { path: "/product/id/:id", element: <ProductDetails /> },
      { path: "/category/:name", element: <TopCategoryProducts /> },
      {
        path: "account-settings",
        element: (
          <PrivateRoute>
            <AccountSettings />
          </PrivateRoute>
        ),
      },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "/checkout/payments", element: <Payments /> },
      { path: "payments-success", element: <PaymentSuccess /> },
      { path: "/payments/invoice/:id", element: <Invoice /> },
      { path: "/checkout/billing-address", element: <BillingAddress /> },
    ],
  },
]);
