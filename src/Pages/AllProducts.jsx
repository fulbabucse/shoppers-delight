import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import ProductCard from "./Shared/ProductCard";

const AllProducts = () => {
  const [showMore, setShowMore] = useState(9);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

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
        {sliceProducts?.map((product) => (
          <ProductCard product={product} key={product._id} />
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
