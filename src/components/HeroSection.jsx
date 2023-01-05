import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles.css";
import { Pagination, Autoplay } from "swiper";
import iphone14 from "../assets/images/iphone-14-pro-max.jpg";
import hpLaptop from "../assets/images/hp-laptop.png";

const HeroSection = () => {
  const carouselData = [
    {
      id: 1,
      title: "The best Phone in the world",
      sub_title:
        "iPhone 14 Pro raises the bar for what 48 megapixels can do — delivering 4x the resolution in ProRAW for mind-blowing detail in every crop.",
      price: 999,
      image: iphone14,
    },
    {
      id: 2,
      title: "Best Laptop brand in the hole world",
      sub_title:
        "Find a great collection of Laptops at HP. Enjoy Low Prices and Free Shipping when you buy now online.",
      price: 899,
      image: hpLaptop,
    },
    {
      id: 3,
      title: "The best apple watch",
      sub_title:
        "Apple Watch Series 8, with new health and safety features. Trade in an eligible Apple Watch and explore financing options",
      price: 501,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    },
    {
      id: 4,
      title:
        "The pursuit of tactile perfection with balanced weight distribution",
      sub_title:
        "Wear modelling consists of the development of wear equations, determination of wear factors/coefficients, contact modelling and numerical calculations of wear.",
      price: 99,
      image:
        "https://img.freepik.com/free-photo/closeup-shot-pretty-afro-american-girl-holding-some-shopping-bags-feeling-happy_181624-44670.jpg?w=740&t=st=1667658645~exp=1667659245~hmac=deaa630155b33252e9fd5eef060757804c94c67c5f9d8249bcba0db7cf661b90",
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {carouselData?.map((data) => (
          <SwiperSlide key={data.id}>
            <div>
              <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                  <div class="max-w-lg lg:mx-12 lg:order-2">
                    <h1 class="text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                      {data.title}
                    </h1>
                    <p class="mt-4 text-gray-600 dark:text-gray-300">
                      {data.sub_title}
                    </p>
                    <div class="mt-6">
                      <button class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                  <img
                    class="object-cover w-full h-full max-w-2xl rounded-md"
                    src={data.image}
                    alt="apple watch photo"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSection;
