import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import BestSellerCard from "../Shared/BestSellerCard";
import Spinner from "../../components/Spinner";
import { FaAngleRight } from "react-icons/fa";

const BestSellers = () => {
  const {
    data: bestSellProducts = [],

    isLoading,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("bestSellers.json");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 bebas-neu-font">
          Best Sellers
        </h1>
        <Link
          to="/products"
          className="flex gap-1 items-center hover:text-red-500 transition-all duration-300 font-medium"
        >
          <span>All Products</span>
          <span>
            <FaAngleRight />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 mt-3">
        {bestSellProducts?.map((product) => (
          <BestSellerCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
