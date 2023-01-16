import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { url } from "../../../utils/BaseURL";

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCategorySubmit = (categoryData) => {
    fetch(`${url}/categories`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
      },
      body: JSON.stringify(categoryData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Successfully added a new Category");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">
                New Category Information
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto px-8 pb-4">
          {/* Projects table */}
          <form
            onSubmit={handleSubmit(handleCategorySubmit)}
            className="w-full"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="category_name"
                >
                  Category Name
                </label>
                <input
                  {...register("name", {
                    required: "Category Name is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="category_name"
                  type="text"
                  placeholder="Men's Fashion"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="category_link"
                >
                  Category Route Name (Small Letter with '-' Symbol)
                </label>
                <input
                  {...register("link", {
                    required: "Category Route Name is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="category_link"
                  type="text"
                  placeholder="Example [men-fashion]"
                />
                {errors.link && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.link?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-3">
              <button
                type="submit"
                className="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-red-200 text-red-700 border focus:text-red-500 border-red-200 focus:border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
