import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../assets/styles.css";

import { Pagination, Autoplay } from "swiper";

const Collections = () => {
  const collectionsStyles = {
    backgroundImage: `url("https://img.freepik.com/free-photo/portrait-hipster-girl-glasses-pink-wall_169016-1401.jpg?w=900&t=st=1673088373~exp=1673088973~hmac=025cf10f640656e232777a583503664b401e790c3156053bd3641ca9de557a34")`,
    height: "90vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={collectionsStyles}>
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
                <h1 className="text-6xl font-medium text-gray-800 collections-font">
                  Printed On Red Hoodie
                </h1>
                <button className="text-white">
                  Shop Now
                  <p className="h-[2px] w-20 bg-white"></p>
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
                <h1 className="text-6xl font-medium text-gray-800 collections-font">
                  Chain Bucket Bag
                </h1>
                <button className="text-white">
                  Shop Now
                  <p className="h-[2px] w-20 bg-white"></p>
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
                <h1 className="text-6xl font-medium text-gray-800 collections-font">
                  Young Woman Wearing Beanie Mockup
                </h1>
                <button className="text-white">
                  Shop Now
                  <p className="h-[2px] w-20 bg-white"></p>
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
