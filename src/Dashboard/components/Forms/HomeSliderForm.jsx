import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { imgURL, url } from "../../../utils/BaseURL";

const HomeSliderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSliderAdd = (sliderData) => {
    const formData = new FormData();
    formData.append("image", sliderData.image[0]);

    fetch(imgURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const sliderInfo = {
          title: sliderData.title,
          sub_title: sliderData.sub_title,
          price: sliderData.price,
          link: sliderData.link,
          image: data.data.url,
        };
        fetch(`${url}/sliders`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
          },
          body: JSON.stringify(sliderInfo),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              toast.success("Successfully added a new Slider");
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
                New Slider Information
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto px-8 pb-4">
          {/* Home Slider Form */}

          <form onSubmit={handleSubmit(handleSliderAdd)} className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="slider_title"
                >
                  Slider Title
                </label>
                <input
                  {...register("title", {
                    required: "Slider Title is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="slider_title"
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
                  htmlFor="slider_button_link"
                >
                  Slider Button Link (With Every Space '/' Symbol Use)
                </label>
                <input
                  {...register("link", {
                    required: "Button link is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="slider_button_link"
                  type="text"
                  placeholder="Example: [category/laptops]"
                />
                {errors.link && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.link?.message}
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
                  htmlFor="slider_subtitle"
                >
                  Sub-Title Name
                </label>
                <input
                  {...register("sub_title", {
                    required: "Sub Title is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="slider_subtitle"
                  type="text"
                  placeholder="iPhone 14 Pro raises the bar for what 48 megapixels"
                />
                {errors.sub_title && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.sub_title?.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="slider_image"
                >
                  Slider Image
                </label>
                <input
                  {...register("image", {
                    required: "Image is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="slider_image"
                  type="file"
                />
                {errors.image && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.image?.message}
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

export default HomeSliderForm;
