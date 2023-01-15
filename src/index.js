import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "tw-elements";
import { Toaster } from "react-hot-toast";
import ProductsProvider from "./contexts/ProductsProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <Provider store={store}>
          <App />
          <Toaster />
        </Provider>
      </ProductsProvider>
    </QueryClientProvider>
  </AuthProvider>
);

reportWebVitals();
