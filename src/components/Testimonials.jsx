import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles.css";
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import TestimonialCard from "../Pages/Shared/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fahim Islam",
      location: "Rangpur, BD",
      image:
        "https://fulbabu.vercel.app/static/media/developer.3030145d3eb346c97905.jpg",
      post: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam repellendus autem quos sit aut eius nihil eveniet magnam esse!",
      rating: 4.6,
      designation: "Web Developer",
    },
    {
      id: 2,
      name: "Farhan Ahmed",
      location: "Rangpur, BD",
      image:
        "https://fulbabu.vercel.app/static/media/developer.3030145d3eb346c97905.jpg",
      post: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam repellendus autem quos sit aut eius nihil eveniet magnam esse!",
      rating: 4.6,
      designation: "Software Engineer",
    },
    {
      id: 3,
      name: "Faruk Hossen",
      location: "Rangpur, BD",
      image:
        "https://fulbabu.vercel.app/static/media/developer.3030145d3eb346c97905.jpg",
      post: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam repellendus autem quos sit aut eius nihil eveniet magnam esse!",
      rating: 4.6,
      designation: "Wild Photographer",
    },
    {
      id: 4,
      name: "Maruf Hossen",
      location: "Rangpur, BD",
      image:
        "https://fulbabu.vercel.app/static/media/developer.3030145d3eb346c97905.jpg",
      post: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam repellendus autem quos sit aut eius nihil eveniet magnam esse!",
      rating: 4.6,
      designation: "Software Engineer",
    },
    {
      id: 5,
      name: "Fulbanu",
      location: "Rangpur, BD",
      image:
        "https://fulbabu.vercel.app/static/media/developer.3030145d3eb346c97905.jpg",
      post: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam repellendus autem quos sit aut eius nihil eveniet magnam esse!",
      rating: 4.6,
      designation: "UI/UX Designer",
    },
  ];
  return (
    <div className="mt-8">
      <h1 className="text-xl lg:text-3xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 bebas-neu-font text-center">
        Testimonials
      </h1>
      <div className="mt-4">
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
          {testimonials?.map((data) => (
            <SwiperSlide key={data.id}>
              <TestimonialCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
