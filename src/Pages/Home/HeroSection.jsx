import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/styles.css";
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { url } from "../../utils/BaseURL";
import Spinner from "../../components/Spinner";

const HeroSection = () => {
  const { data: sliders = [], isLoading } = useQuery({
    queryKey: ["sliders"],
    queryFn: async () => {
      const res = await fetch(`${url}/sliders`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliders?.map((data) => (
          <SwiperSlide key={data._id}>
            <div>
              <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-10 lg:flex-row lg:items-center">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                  <div className="max-w-lg lg:mx-12 lg:order-2">
                    <h1 className="text-2xl font-bold tracking-wider playfair-display text-gray-800 dark:text-white lg:text-6xl uppercase">
                      {data.title}
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {data.sub_title}
                    </p>
                    <div className="mt-6">
                      <Link to={`/${data.link}`}>
                        <button className="rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2 overflow-hidden hover:bg-primaryColor transition-all duration-300">
                  <img
                    className="object-cover w-full h-full max-w-2xl rounded-md hover:scale-125 transition-all duration-1000 ease-in-out transform-gpu"
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
