import React from "react";
import PriceRange from "../components/PriceRange";
import CategoryAccordion from "./Shared/CategoryAccordion";

const Products = () => {
  return (
    <div>
      <div className="md:flex justify-center gap-2">
        <div class="max-w-sm w-full lg:flex flex-col bg-white p-3 gap-3 rounded-md">
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
      </div>
    </div>
  );
};

export default Products;
