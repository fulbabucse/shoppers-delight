import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignIn = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(email);

  if (token) {
    return navigate(from, { replace: true });
  }

  const handleUserSignIn = (userData) => {
    signInUser(userData?.email, userData?.password)
      .then((result) => {
        setEmail(result?.user?.email);
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setEmail(result?.user?.email);
      })
      .catch(() => {});
  };
  return (
    <div className="h-full bg-transparent w-full py-8 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p
            tabIndex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Don't have account?{" "}
            <Link
              to="/sign-up"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              Sign up here
            </Link>
          </p>
          <button
            onClick={() => handleGoogleSignIn()}
            aria-label="Continue with google"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <button
            aria-label="Continue with github"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
              alt="github"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Github
            </p>
          </button>
          <button
            aria-label="Continue with twitter"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg"
              alt="twitter"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Twitter
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400" />
          </div>
          <form onSubmit={handleSubmit(handleUserSignIn)}>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                aria-labelledby="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              {errors.email && (
                <p className="text-red-400 text-sm font-medium">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="mt-4 w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  id="pass"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />

                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                    alt="viewport"
                  />
                </div>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm font-medium">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 w-full"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
