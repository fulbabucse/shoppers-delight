import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { connect, useDispatch } from "react-redux";
import { productCategories } from "../../../redux/actions/actions";
import { url } from "../../../utils/BaseURL";

const ProductForm = ({ categories }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const res = await fetch(`${url}/categories`);
    const data = await res.json();
    dispatch(productCategories(data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleProductsPost = (productData) => {
    if (productData.rating > 5) {
      toast.error("Product Rating out of 5");
      return;
    }

    const formData = new FormData();
    formData.append("image", productData.thumbnail[0]);

    const imgURL = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;
    fetch(imgURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const product = {
          title: productData.title,
          category: productData.category,
          description: productData.description,
          brand: productData.brand,
          price: productData.price,
          stock: productData.stock,
          rating: productData.rating,
          thumbnail: data?.data?.url,
          discountPercentage: productData.discountPercentage,
        };
        fetch(`${url}/products`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              toast.success("Successfully added a new Product");
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">
                New Product Information
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto px-8 pb-4">
          {/* Projects table */}
          <form onSubmit={handleSubmit(handleProductsPost)} className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_name"
                >
                  Product Name
                </label>
                <input
                  {...register("title", {
                    required: "Product Name is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_name"
                  type="text"
                  placeholder="iPhone 14 Pro Max"
                />
                {errors.title && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.title?.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_brand"
                >
                  Brand Name
                </label>
                <input
                  {...register("brand", {
                    required: "Brand is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_brand"
                  type="text"
                  placeholder="Apple"
                />
                {errors.brand && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.brand?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_price"
                >
                  Product Price
                </label>
                <input
                  {...register("price", {
                    required: "Price is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_price"
                  type="text"
                  placeholder="$999.00"
                />
                {errors.price && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.price?.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_stock"
                >
                  Stock Size
                </label>
                <input
                  {...register("stock", {
                    required: "Stock Size is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_stock"
                  type="text"
                  placeholder="100 Pieces"
                />
                {errors.stock && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.stock?.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_rating"
                >
                  Product Rating
                </label>
                <input
                  {...register("rating", {
                    required: "Rating is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_rating"
                  type="text"
                  placeholder="4.9"
                />
                {errors.rating && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.rating?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="discount_percent"
                >
                  Discount Percent
                </label>
                <input
                  {...register("discountPercentage", {
                    required: "Email is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="discount_percent"
                  type="text"
                  placeholder="7.36%"
                />
                {errors.discountPercentage && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.discountPercentage?.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_category"
                >
                  Product Category
                </label>
                <div className="relative">
                  <select
                    {...register("category", {
                      required: "Category Name is required",
                    })}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                    id="product_category"
                  >
                    <option value="Select One" selected>
                      Select One
                    </option>
                    {categories?.categories?.map((category) => (
                      <option
                        key={category?._id}
                        defaultValue={category?.name}
                        className="capitalize"
                      >
                        {category?.link}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.category && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.category?.message}
                  </p>
                )}
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_thumbnail"
                >
                  Product Thumbnail
                </label>
                <input
                  {...register("thumbnail", {
                    required: "Thumbnail is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_thumbnail"
                  type="file"
                  multiple="multiple"
                />
                {errors.thumbnail && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.thumbnail?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mt-5">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="product_descriptions"
                >
                  Product Descriptions
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_descriptions"
                  type="text"
                  placeholder="iPhone 14 Pro raises the bar for what 48 megapixels can do — delivering 4x the resolution in ProRAW for mind-blowing detail in every crop."
                />
                {errors.description && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.description?.message}
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

const mapStateToProps = (state) => {
  return {
    categories: state?.productCategories,
  };
};

export default connect(mapStateToProps)(ProductForm);
