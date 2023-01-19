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
import Settings from "../Dashboard/Views/Settings";
import AddCategory from "../Dashboard/Pages/AddCategory";
import Users from "../Dashboard/Pages/Users";
import PaymentsOrders from "../Dashboard/Pages/PaymentOrders";
import AddProduct from "../Dashboard/Pages/AddProducts";
import PendingOrders from "../Dashboard/Pages/PendingOrders";
import DashboardAllProducts from "../Dashboard/Views/DashboardAllProducts";
import HomeSlider from "../Dashboard/Pages/HomeSlider";
import Sliders from "../Dashboard/Pages/Sliders";
import Categories from "../Dashboard/Pages/Categories";

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
    errorElement: <ErrorPage />,
    element: (
      <AdminRoute>
        <Admin />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/settings",
        element: (
          <AdminRoute>
            <Settings />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/products",
        element: (
          <AdminRoute>
            <DashboardAllProducts />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/pending-orders",
        element: (
          <AdminRoute>
            <PendingOrders />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/add-product",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/payments-complete",
        element: (
          <AdminRoute>
            <PaymentsOrders />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/all-users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/add-category",
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/add-slider",
        element: (
          <AdminRoute>
            <HomeSlider />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/sliders",
        element: (
          <AdminRoute>
            <Sliders />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/all-categories",
        element: (
          <AdminRoute>
            <Categories />
          </AdminRoute>
        ),
      },
    ],
  },
]);
