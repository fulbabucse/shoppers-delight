import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ProductLayout from "../Layout/ProductLayout";
import About from "../Pages/About";
import AllProducts from "../Pages/AllProducts";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import CategoryProducts from "../Pages/Shared/CategoryProducts";
import ProductDetails from "../Pages/Shared/ProductDetails";
import AccountSettings from "../Pages/User/AccountSettings";
import SignIn from "../Pages/User/SignIn";
import SignUp from "../Pages/User/SignUp";

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
      { path: "cart", element: <Cart /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/category/:name", element: <CategoryProducts /> },
      { path: "account-settings", element: <AccountSettings /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]);
