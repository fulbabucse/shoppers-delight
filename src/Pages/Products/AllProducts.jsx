import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import Spinner from "../../components/Spinner";
import { ProductsContext } from "../../contexts/ProductsProvider";
import ProductCard from "../Shared/ProductCard";

const AllProducts = () => {
  const [showMore, setShowMore] = useState(9);
  const { newPrice } = useContext(ProductsContext);

  const startPrice = Math.ceil(newPrice[0]);
  const endPrice = Math.ceil(newPrice[1]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", startPrice, endPrice],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?start=${startPrice}&end=${endPrice}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  const sliceProducts = products?.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sliceProducts?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      {products?.length > 1 && (
        <div className="flex justify-center">
          <button
            onClick={() => handleShowMore()}
            className="mt-4 rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
