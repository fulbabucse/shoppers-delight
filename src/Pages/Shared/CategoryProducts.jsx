import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { ProductsContext } from "../../contexts/ProductsProvider";
import ProductCard from "./ProductCard";

const CategoryProducts = () => {
  const { newPrice } = useContext(ProductsContext);
  const startPrice = Math.ceil(newPrice[0]);
  const endPrice = Math.ceil(newPrice[1]);

  const { name } = useParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: [name, startPrice, endPrice],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/category/${name}?start=${startPrice}&end=${endPrice}`
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
