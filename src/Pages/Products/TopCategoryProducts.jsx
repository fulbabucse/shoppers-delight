import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";
import Spinner from "../../components/Spinner";

const TopCategoryProducts = () => {
  const { name } = useParams();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["category", name],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/products/similar/${name}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default TopCategoryProducts;
