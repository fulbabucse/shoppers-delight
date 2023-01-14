import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-5">
      <Helmet>
        <title>404 Page not found - Shopper's Delight</title>
      </Helmet>
      <div>
        <div className="lg:flex gap-8 sm:flex-wrap">
          <h1 className="text-4xl font-black text-red-500 text-center">404</h1>
          <div className="lg:border-l lg:border-gray-500 pl-8">
            <h1 className="text-xl lg:text-4xl font-black text-gray-800 text-center lg:text-start">
              Page not found
            </h1>
            <p className="text-sm lg:text-lg text-gray-700 mt-2 text-center lg:text-start">
              Please check the URL in address bar and try again.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <Link to="/">
            <button className="bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600 text-sm rounded-sm">
              Back to Home
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-600 text-sm rounded-sm">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
