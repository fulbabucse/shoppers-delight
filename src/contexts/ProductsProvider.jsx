import React, { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const productsInfo = { show, setShow };
  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
