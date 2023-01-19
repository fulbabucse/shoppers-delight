import React from "react";
import CategoriesTable from "../components/Cards/CategoriesTable";

const Categories = () => {
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <CategoriesTable />
      </div>
    </div>
  );
};

export default Categories;
