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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ForgetPassword from "../Pages/User/ForgetPassword";
import AdminRoute from "./AdminRoute";
import Admin from "../Layout/Admin";
import Dashboard from "../Dashboard/Views/Dashboard";
import Maps from "../Dashboard/Views/Maps";
import Settings from "../Dashboard/Views/Settings";
import Tables from "../Dashboard/Views/Tables";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
      {
        path: "/product/id/:id",
        element: <ProductDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/category/:name",
        element: <TopCategoryProducts />,
        errorElement: <ErrorPage />,
      },
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
      { path: "forget-password", element: <ForgetPassword /> },
      {
        path: "/checkout/payments",
        element: (
          <PrivateRoute>
            <Payments />
          </PrivateRoute>
        ),
      },
      {
        path: "payments-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/billing-address",
        element: (
          <PrivateRoute>
            <BillingAddress />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/payments/invoice/:id",
    element: (
      <PrivateRoute>
        <Invoice />
      </PrivateRoute>
    ),
  },
  {
    path: "admin",
    element: (
      <AdminRoute>
        <Admin />
      </AdminRoute>
    ),
    children: [
      { path: "/admin/dashboard", element: <Dashboard /> },
      { path: "/admin/maps", element: <Maps /> },
      { path: "/admin/settings", element: <Settings /> },
      { path: "/admin/tables", element: <Tables /> },
    ],
  },
]);
