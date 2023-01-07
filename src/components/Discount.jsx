import React from "react";
import Timer from "./Timer";

const Discount = () => {
  return (
    <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 w-96 sm:w-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            src="https://img.freepik.com/free-photo/fashionable-model-stylish-hat-red-coat-boots-posing-white-wall-studio_273443-4646.jpg?w=740&t=st=1673103073~exp=1673103673~hmac=469691b6ce5136f38578e5d21ce0cb7704e9ffecf7b8216df20af76fabacbc07"
            alt=""
          />
        </div>
        <div className="bg-[#F3B5BA] w-full h-full flex flex-col items-center justify-center">
          <div className="text-center text-gray-800 space-y-3">
            <h4 className="text-xl">Discount</h4>
            <h1 className="text-6xl font-semibold text-gray-800 collections-font">
              Winter 2023
            </h1>
            <h4 className="text-xl">
              Sale{" "}
              <span className="text-2xl text-green-500 font-bold">50%</span>
            </h4>
          </div>
          <div>
            <Timer />
          </div>
          <div className="flex justify-center">
            <button className="text-gray-700">
              Shop Now
              <p className="h-[2px] w-20 bg-gray-700"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
