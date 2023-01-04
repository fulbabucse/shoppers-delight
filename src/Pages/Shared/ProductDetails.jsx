import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Products details Page</h1>
    </div>
  );
};

export default ProductDetails;
