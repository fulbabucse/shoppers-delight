import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (userData) => {
    console.log(userData);
  };
  return (
    <div className="w-full lg:max-w-md mx-auto">
      <div class="bg-white shadow sm:rounded-lg flex justify-center">
        <div class="p-6 sm:p-12">
          <div class="flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-bold text-gray-700">
              Create a New Account
            </h1>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <div class="mt-4">
                <input
                  {...register("fullName", {
                    required: "Name is required",
                  })}
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Full Name"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.fullName?.message}
                  </p>
                )}
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.email?.message}
                  </p>
                )}
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password length should be 6 character",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message: `At least 1 special character, 1 uppercase letter, and Number character make the password stronger`,
                    },
                  })}
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.password?.message}
                  </p>
                )}
                <input
                  {...register("image", {
                    required: "Image is required",
                  })}
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="file"
                />
                {errors.image && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.image?.message}
                  </p>
                )}
                <button class="mt-5 tracking-wide font-medium text-sm bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    class="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="ml-3">Sign Up</span>
                </button>
                <p class="mt-6 text-sm text-gray-600 flex items-center justify-center gap-1">
                  <span>Already have an Account?</span>
                  <Link to="/sign-in" className=" hover:text-red-400">
                    Sign In here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
