import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import New from "./New";

const NewProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 bebas-neu-font">
          New Products
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
      <div className="md:flex justify-center gap-2">
        <div className="flex-1"></div>

        <div className="max-w-md w-full lg:flex bg-white p-3 gap-3 rounded-md">
          <div className="lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
              className="lg:h-full rounded-md"
              src="https://img.global.news.samsung.com/global/wp-content/uploads/2022/02/Galaxy_S22_Ultra_PR_main1F.jpg"
              alt=""
            />
          </div>
          <div className="rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
            <div>
              <p className="text-sm text-red-500 flex items-center"></p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Samsung S22 Ultra
              </div>
              <p className="text-gray-700 text-xs text-justify">
                Galaxy S22 Ultra is an excellent phone for those who want a
                premium mobile gaming experience, because it's equipped with a
                fast 4nm processor, long-lasting battery and large storage
                capabilities.
              </p>
              <button className="mt-3 w-full rounded-full bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
