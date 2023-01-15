import React from "react";
import AddProductCard from "../Cards/AddProductCard";

export default function AddProduct() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <AddProductCard />
        </div>
      </div>
    </>
  );
}
