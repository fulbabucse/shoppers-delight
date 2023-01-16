import React from "react";
import ProductsTable from "../components/Cards/ProductsTable";

// components

export default function DashboardAllProducts() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ProductsTable />
        </div>
      </div>
    </>
  );
}
