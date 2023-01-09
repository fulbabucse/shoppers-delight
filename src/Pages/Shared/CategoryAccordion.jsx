import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CategoryAccordion = () => {
  const { data: categories = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("category.json");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {categories?.map((category) => (
        <div
          key={category?.id}
          class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200"
        >
          <h2 class="accordion-header mb-0" id="flush-headingTwo">
            <button
              class="accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-3
        px-3
        text-sm text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#id${category?.id}`}
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              {category?.category_name}
            </button>
          </h2>
          <div
            id={`id${category?.id}`}
            class="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingTwo"
          >
            <div class="accordion-body py-4 px-5">
              {category?.sub_category_name?.map((sub, index) => (
                <Link
                  key={index}
                  to={`/products/category/${sub}`}
                  className="flex flex-col my-2 text-sm hover:text-red-500 capitalize"
                >
                  - {sub}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryAccordion;
