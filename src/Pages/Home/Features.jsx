import React from "react";
import "../../assets/styles.css";
import {
  FaStarHalfAlt,
  FaWarehouse,
  FaShippingFast,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Quality and Saving",
      logo: <FaStarHalfAlt />,
      desc: "Comprehensive quality control and affordable prices",
    },
    {
      id: 2,
      title: "Warehouse",
      logo: <FaWarehouse />,
      desc: "8 Cities warehouses",
    },
    {
      id: 3,
      title: "Fast Shipping",
      logo: <FaShippingFast />,
      desc: "Fast and convenient door to door delivery",
    },
    {
      id: 4,
      title: "Payment Security",
      logo: <MdVerifiedUser />,
      desc: "More than 2 different secure payment system",
    },
    {
      id: 5,
      title: "Have Questions?",
      logo: <FaQuestionCircle />,
      desc: "24/7 Customer service - We're here and happy to help!",
    },
  ];
  return (
    <div
      className="feature-bg 2xl:mx-auto 2xl:container lg:px-20 md:py-12 md:px-6 px-4 w-96 sm:w-auto mt-7"
      data-aos-offset="200"
      data-aos="fade-up-left"
      data-aos-delay="70"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="container">
        <section className="text-gray-800 text-center">
          <div
            role="main"
            className="flex flex-col items-center justify-center mb-5"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              Why Shop with Us?
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              An impressive or wonderful example of a particular quality type of
              ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {featuresData?.map((feature) => (
              <div
                key={feature?.id}
                className="bg-white flex flex-col items-center justify-center p-5 space-y-1 rounded-md"
              >
                <div className="text-2xl lg:text-5xl font-bold text-red-400">
                  {feature.logo}
                </div>

                <h1 className="text-sm text-gray-800 font-semibold uppercase roboto-font">
                  {feature?.title}
                </h1>
                <p className="text-gray-800 text-xs">{feature?.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
