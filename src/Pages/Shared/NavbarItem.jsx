import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = () => {
  return (
    <div class="flex space-x-2">
      <div className="px-4 lg:px-10">
        <div
          class="offcanvas offcanvas-top fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 right-0 border-none h-1/3 max-h-full"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div class="offcanvas-header flex items-center justify-between p-4">
            <div>
              <Link to="/">
                <h1 className="text-lg lg:text-2xl font-bold text-gray-800">
                  Shopper's Delight
                </h1>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Contact
              </Link>
            </div>
            <button
              type="button"
              class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItem;
