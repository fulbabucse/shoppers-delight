import { createBrowserRouter } from "react-router-dom";
import CategoryProducts from "../components/CategoryProducts";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
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
      { path: "products", element: <Products /> },
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
