import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsProvider";
import PriceRange from "../Pages/Products/PriceRange";
import CategoryAccordion from "../Pages/Shared/CategoryAccordion";

const ProductLayout = () => {
  const { handleRatingStar } = useContext(ProductsContext);

  return (
    <div className="md:flex justify-center gap-4 px-3 lg:px-0">
      <Helmet>
        <title>Products - Shopper's Delight</title>
      </Helmet>
      <div className="lg:max-w-sm mt-3 lg:mt-0 w-full lg:flex flex-col bg-white p-3 gap-3 rounded-md">
        <div className="mb-3">
          <h1 className="text-lg font-medium text-gray-600 dark:text-gray-50 roboto-font">
            Categories
          </h1>
          <p className="h-[2px] w-16 bg-red-500"></p>
        </div>
        <div>
          <CategoryAccordion />
          <PriceRange />
          <div className="mt-4">
            <h1 className="text-lg font-medium text-gray-600 dark:text-gray-50 roboto-font">
              Rating
            </h1>
            <p className="h-[2px] w-8 bg-red-500"></p>
            <div className="mt-3 space-y-1">
              <div>
                <button
                  onClick={() => handleRatingStar(5)}
                  className="flex text-yellow-300 gap-1 text-xl"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleRatingStar(4)}
                  className="flex text-yellow-300 gap-1 text-xl"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                  <span className="text-gray-700 text-sm">And Up</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleRatingStar(3)}
                  className="flex text-yellow-300 gap-1 text-xl"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                  <FaStar className="text-gray-300" />
                  <span className="text-gray-700 text-sm">And Up</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleRatingStar(2)}
                  className="flex text-yellow-300 gap-1 text-xl"
                >
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                  <FaStar className="text-gray-300" />
                  <FaStar className="text-gray-300" />
                  <span className="text-gray-700 text-sm">And Up</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleRatingStar(1)}
                  className="flex text-yellow-300 gap-1 text-xl"
                >
                  <FaStar />
                  <FaStar className="text-gray-300" />
                  <FaStar className="text-gray-300" />
                  <FaStar className="text-gray-300" />
                  <FaStar className="text-gray-300" />
                  <span className="text-gray-700 text-sm">And Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-3 lg:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayout;
