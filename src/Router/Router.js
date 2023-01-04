import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/Shared/ProductDetails";

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
    ],
  },
]);
