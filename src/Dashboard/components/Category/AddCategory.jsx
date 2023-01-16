import React from "react";
import CategoryForm from "../Forms/CategoryForm";

const AddCategory = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CategoryForm />
        </div>
      </div>
    </>
  );
};

export default AddCategory;
