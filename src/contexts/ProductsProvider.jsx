import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthProvider";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [newPrice, setNewPrice] = useState([1, 1500]);
  const [ratingStar, setRatingStar] = useState(4);

  const handleRatingStar = (getRating) => {
    setRatingStar(getRating);
  };

  const { data: userData = [] } = useQuery({
    queryKey: ["billing", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/billing?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const productsInfo = {
    newPrice,
    setNewPrice,
    handleRatingStar,
    ratingStar,
    userData,
  };

  return (
    <ProductsContext.Provider value={productsInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
