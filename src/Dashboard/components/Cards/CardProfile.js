import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { ProductsContext } from "../../../contexts/ProductsProvider";

// components

export default function CardProfile() {
  const { user } = useContext(AuthContext);
  const { userData } = useContext(ProductsContext);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-32">
            <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
              {user?.displayName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {userData.city}, {userData?.country}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Founder & CEO of Shopper's Delight, Software Engineer
            </div>
          </div>
          <div className="mt-5 py-5 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12">
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  I am Fulbabu, I am completing my diploma engineering course in
                  Computer Technology 2021. I'm a passionate Frontend Developer.
                  I like to provide clean code and pixel perfect designs.
                </p>
                <a
                  href="https://fulbabu.vercel.app"
                  target="_blank"
                  className="font-normal text-blue-500"
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
