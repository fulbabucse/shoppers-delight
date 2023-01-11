import React, { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [newPrice, setNewPrice] = useState([1, 1500]);
  const productsInfo = { newPrice, setNewPrice };
  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
