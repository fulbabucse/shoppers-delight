import React, { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [newPrice, setNewPrice] = useState([1, 1500]);
  const [ratingStar, setRatingStar] = useState(4);

  const handleRatingStar = (getRating) => {
    setRatingStar(getRating);
  };
  const productsInfo = {
    newPrice,
    setNewPrice,
    handleRatingStar,
    ratingStar,
  };

  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
