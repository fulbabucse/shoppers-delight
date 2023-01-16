import React from "react";
import ProductForm from "../Forms/ProductForm";

export default function AddProduct() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ProductForm />
        </div>
      </div>
    </>
  );
}
