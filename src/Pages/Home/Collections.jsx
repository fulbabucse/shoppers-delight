import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../../assets/styles.css";

import { Pagination, Autoplay } from "swiper";

const Collections = () => {
  return (
    <div
      className="collectionsStyles my-8 lg:mt-0"
      data-aos-offset="200"
      data-aos="fade-up"
      data-aos-delay="70"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="2xl:mx-auto 2xl:container lg:px-20 md:py-12 md:px-6 px-4 w-96 sm:w-auto">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="py-28">
              <div className="text-center space-y-6">
                <h3 className="text-xl text-gray-800 uppercase tracking-wide">
                  The Cool Collections
                </h3>
                <h1 className="text-6xl font-medium text-gray-800 cookie-font">
                  Printed On Red Hoodie
                </h1>
                <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-28">
              <div className="text-center space-y-6">
                <h3 className="text-xl text-gray-800 uppercase tracking-wide">
                  The Cool Collections
                </h3>
                <h1 className="text-6xl font-medium text-gray-800 cookie-font">
                  Chain Bucket Bag
                </h1>
                <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-28">
              <div className="text-center space-y-6">
                <h3 className="text-xl text-gray-800 uppercase tracking-wide">
                  The Cool Collections
                </h3>
                <h1 className="text-6xl font-medium text-gray-800 cookie-font">
                  Young Woman Wearing Beanie Mockup
                </h1>
                <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Collections;
