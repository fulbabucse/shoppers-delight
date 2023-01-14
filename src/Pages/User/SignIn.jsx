import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import { url } from "../../utils/BaseURL";

const SignIn = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
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
    toast.success("Successfully Account sign In");
    return navigate(from, { replace: true });
  }

  const handleUserSignIn = (userData) => {
    setIsProcessing(true);
    signInUser(userData?.email, userData?.password)
      .then((result) => {
        setEmail(result?.user?.email);
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/user-not-found).") {
          setError("You are entering the wrong email address");
        } else if (err.message === "Firebase: Error (auth/wrong-password).") {
          setError("You are entering the wrong password");
        }
        setIsProcessing(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result?.user;
        saveToDatabase(user?.displayName, user?.email, user?.photoURL);
      })
      .catch(() => {});
  };

  const saveToDatabase = (name, email, photoLink) => {
    const updatesInfo = {
      name,
      photoURL: photoLink,
      email,
    };
    fetch(`${url}/users?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatesInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setEmail(email);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-full bg-transparent w-full py-8 px-4">
      <Helmet>
        <title>Sign In - Shopper's Delight</title>
      </Helmet>
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
                className="flex items-center justify-center focus:ring-2 focus:ring-offset-2 focus:ring-red-700 rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 w-full"
              >
                <FaSignInAlt />
                <span className="ml-3">
                  {isProcessing ? "Processing..." : "Sign In"}
                </span>
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <Link to="/forget-password">
              <button className="hover:border-b hover:border-b-gray-700 text-sm">
                Forget Password?
              </button>
            </Link>
          </div>
          {error && (
            <p className="text-red-500 font-medium mt-2 text-sm text-center">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
