import React from "react";
import { Link } from "react-router-dom";
import Timer from "../../components/Timer";

const Discount = () => {
  return (
    <div
      className="2xl:mx-auto 2xl:container py-10 lg:px-20 md:px-6 px-4 w-96 sm:w-auto"
      data-aos-offset="200"
      data-aos="fade-up"
      data-aos-delay="70"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            src="https://img.freepik.com/free-photo/fashionable-model-stylish-hat-red-coat-boots-posing-white-wall-studio_273443-4646.jpg?w=740&t=st=1673103073~exp=1673103673~hmac=469691b6ce5136f38578e5d21ce0cb7704e9ffecf7b8216df20af76fabacbc07"
            alt=""
          />
        </div>
        <div className="bg-[#F3B5BA] w-full h-full flex flex-col items-center justify-center py-5">
          <div className="text-center text-gray-800 space-y-2 lg:space-y-4">
            <h4 className="text-xl">Discount</h4>
            <h1 className="text-6xl font-semibold text-gray-800 cookie-font">
              Winter 2023
            </h1>
            <h4 className="text-xl">
              Sale{" "}
              <span className="text-2xl text-green-500 font-bold">50%</span>
            </h4>
          </div>
          <div className="hidden lg:block">
            <Timer />
          </div>
          <div className="flex justify-center mt-2">
            <Link to="/products">
              <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
