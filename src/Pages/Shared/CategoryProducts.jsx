import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { ProductsContext } from "../../contexts/ProductsProvider";
import { url } from "../../utils/BaseURL";
import ProductCard from "./ProductCard";

const CategoryProducts = () => {
  const { newPrice, ratingStar } = useContext(ProductsContext);
  const startPrice = Math.ceil(newPrice[0]);
  const endPrice = Math.ceil(newPrice[1]);

  // http://localhost:5000/products/category/mens-jackets-blazers-coats?start=1&end=100&rating=4

  const { name } = useParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: [name, startPrice, endPrice, startPrice, ratingStar],
    queryFn: async () => {
      const res = await fetch(
        `${url}/products/category/${name}?start=${startPrice}&end=${endPrice}&rating=${ratingStar}`,
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <p className="text-center">
        {products?.length === 0
          ? "We're sorry. We cannot find any matches for your term."
          : `${products?.length}  items found`}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
