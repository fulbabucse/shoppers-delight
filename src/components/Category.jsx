import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 md:py-12 md:px-6 px-4 w-96 sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              Top Categories
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              These are top of our category. You can get the product of your
              choice from here.
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-gray-900">
                        Jewellery
                      </h2>
                      <Link
                        to="/category/womens-jewellery"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-gray-500 hover:text-gray-800 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Show More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://img.freepik.com/free-photo/traditional-indian-wedding-jewelry_8353-9762.jpg?w=740&t=st=1673030665~exp=1673031265~hmac=f0bcbc0d8cedf84856e6ee047c8a45e49b6ae3cff27ce84ebce7a00cdb277e89"
                    className="w-full lg:h-[260px]"
                    alt="chair"
                  />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-gray-900">
                        Laptops
                      </h2>
                      <Link
                        to="/category/laptops"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-gray-500 hover:text-gray-800 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Show More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-laptop_23-2148128346.jpg?w=740&t=st=1673030740~exp=1673031340~hmac=f5e889075e669f47adaaf7e2a374a7cf4b8324eb57ec011ce5586254d4b1b720"
                    className="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold text-white">
                      Women's Fashion
                    </h2>
                    <Link
                      to="/category/womens-dresses"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-gray-200 hover:text-gray-400 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Show More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=740&t=st=1673034656~exp=1673035256~hmac=0e8dc2022101df12f1472b801661409901209d63e7050f6ed7489b47205b78ea"
                  alt="sitting place"
                  className="w-full mt-8 md:mt-6 hidden sm:block"
                />
                <img
                  className="w-full mt-4 sm:hidden"
                  src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
            </div>

            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Smart Phones
                    </h2>
                    <Link
                      to="/category/smartphones"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Show More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437134.jpg?1&w=740&t=st=1673030604~exp=1673031204~hmac=c3af4b08cc0441c3c5aa3bff455f5c3fd785a60fc676d49c22e94eeb7d053b6f"
                  alt="sitting place"
                  className="w-full sm:block hidden"
                />
                <img
                  className="w-full sm:hidden"
                  src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Smart Home
                      </h2>
                      <Link
                        to="/category/furniture"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Show More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?w=740&t=st=1673030835~exp=1673031435~hmac=af44c5a182a60b9aa8c805adb6917e59b40eebacddf0e18b34127fd52058eb5c"
                    className="w-full lg:h-[260px]"
                    alt="chair"
                  />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Automotive
                      </h2>
                      <Link
                        to={`/category/automotive`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Show More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://img.freepik.com/free-photo/man-woman-fixing-car-together_23-2148327530.jpg?w=740&t=st=1673030926~exp=1673031526~hmac=b7e4bd715b8e242d4fc8584203e9fed1bba506a0659013ef2745baedaffb189c"
                    className="w-full lg:h-[260px]"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
