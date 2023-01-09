import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div>
        <div className="2xl:mx-auto 2xl:container lg:px-20 md:py-12 md:px-6 px-4 w-96 sm:w-auto">
          <div role="main" className="">
            <h1 className="text-xl lg:text-3xl font-medium tracking-wide text-gray-800 dark:text-gray-50 bebas-neu-font">
              Top Categories
            </h1>
            <p className="text-base leading-normal text-gray-600 mt-1">
              These are top of our category. You can get the product of your
              choice from here.
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 space-y-4 lg:space-y-0">
                <section class="mx-auto relative">
                  <div class="w-full group">
                    <div class="relative overflow-hidden">
                      <img
                        class="h-60 w-96"
                        src="https://img.freepik.com/free-photo/traditional-indian-wedding-jewelry_8353-9762.jpg?w=740&t=st=1673030665~exp=1673031265~hmac=f0bcbc0d8cedf84856e6ee047c8a45e49b6ae3cff27ce84ebce7a00cdb277e89"
                        alt="title"
                      />
                      <div class="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-3">
                        <h2 className="text-xl font-medium text-white">
                          Jewellery
                        </h2>
                        <Link to="/category/womens-jewellery">
                          <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                            Show More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="mx-auto relative">
                  <div class="w-full group">
                    <div class="relative overflow-hidden">
                      <img
                        class="h-60 w-96"
                        src="https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-laptop_23-2148128346.jpg?w=740&t=st=1673030740~exp=1673031340~hmac=f5e889075e669f47adaaf7e2a374a7cf4b8324eb57ec011ce5586254d4b1b720"
                        alt="title"
                      />
                      <div class="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-3">
                        <h2 className="text-xl font-medium text-white">
                          Laptops
                        </h2>
                        <Link to="/category/laptops">
                          <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                            Show More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Women's Fashion */}
              <section class="mx-auto relative mt-4 lg:mt-8">
                <div class="w-full group">
                  <div class="relative overflow-hidden">
                    <img
                      class="h-96 w-full object-cover"
                      src="https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=740&t=st=1673034656~exp=1673035256~hmac=0e8dc2022101df12f1472b801661409901209d63e7050f6ed7489b47205b78ea"
                      alt="title"
                    />
                    <div class="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-3">
                      <h2 className="text-xl font-medium text-white">
                        Women's Fashion
                      </h2>
                      <Link to="/category/womens-dresses">
                        <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                          Show More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <section class="mx-auto relative">
                <div class="w-full group">
                  <div class="relative overflow-hidden">
                    <img
                      class="h-96 w-full object-cover"
                      src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437134.jpg?1&w=740&t=st=1673030604~exp=1673031204~hmac=c3af4b08cc0441c3c5aa3bff455f5c3fd785a60fc676d49c22e94eeb7d053b6f"
                      alt="title"
                    />
                    <div class="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-3">
                      <h2 className="text-xl font-medium text-white">
                        Smartphones
                      </h2>
                      <Link to="/category/smartphones">
                        <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                          Show More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4 space-y-4 lg:space-y-0">
                <section class="mx-auto relative">
                  <div class="w-full group">
                    <div class="relative overflow-hidden">
                      <img
                        class="h-60 w-96"
                        src="https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?w=740&t=st=1673030835~exp=1673031435~hmac=af44c5a182a60b9aa8c805adb6917e59b40eebacddf0e18b34127fd52058eb5c"
                        alt="title"
                      />
                      <div class="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-3">
                        <h2 className="text-xl font-medium text-white">
                          Smart Home
                        </h2>
                        <Link to="/category/furniture">
                          <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                            Show More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="mx-auto relative">
                  <div class="w-full group">
                    <div class="relative overflow-hidden">
                      <img
                        class="h-60 w-96"
                        src="https://img.freepik.com/free-photo/man-woman-fixing-car-together_23-2148327530.jpg?w=740&t=st=1673030926~exp=1673031526~hmac=b7e4bd715b8e242d4fc8584203e9fed1bba506a0659013ef2745baedaffb189c"
                        alt="title"
                      />
                      <div class="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-3">
                        <h2 className="text-xl font-medium text-white">
                          Automotive
                        </h2>
                        <Link to="/category/automotive">
                          <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                            Show More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
