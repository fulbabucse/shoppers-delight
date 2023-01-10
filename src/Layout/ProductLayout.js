import React from "react";
import { Outlet } from "react-router-dom";
import PriceRange from "../components/PriceRange";
import CategoryAccordion from "../Pages/Shared/CategoryAccordion";

const ProductLayout = () => {
  return (
    <div className="md:flex justify-center gap-4 px-3 lg:px-0">
      <div className="lg:max-w-sm mt-3 lg:mt-0 w-full lg:flex flex-col bg-white p-3 gap-3 rounded-md">
        <div className="mb-3">
          <h1 className="text-xl font-medium text-gray-600 dark:text-gray-50 uppercase roboto-font">
            Categories
          </h1>
          <p className="h-[2px] w-20 bg-red-500"></p>
        </div>
        <div>
          <CategoryAccordion />
          <PriceRange />
        </div>
      </div>
      <div className="flex-1 mt-3 lg:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayout;
