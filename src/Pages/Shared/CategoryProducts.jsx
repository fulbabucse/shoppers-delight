import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ProductCard from "./ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: [name],
    queryFn: async () => {
      const res = await fetch(
        `https://shopper-s-delight-server.vercel.app/products/category/${name}`
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
