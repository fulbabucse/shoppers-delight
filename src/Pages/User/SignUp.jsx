import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { signUpEmailPassword, updateUserProfile } = useContext(AuthContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [token] = useToken(email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    setIsProcessing(false);
    return navigate(from, { replace: true });
  }

  const handleSignIn = (userData) => {
    const formData = new FormData();
    formData.append("image", userData.image[0]);

    setIsProcessing(true);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photoLink = data?.data?.url;
        signUpEmailPassword(userData.email, userData.password)
          .then((result) => {
            const updatesInfo = {
              displayName: userData.fullName,
              photoURL: photoLink,
            };

            updateUserProfile(updatesInfo)
              .then(() => {
                saveToDatabase(
                  result?.user?.displayName,
                  result?.user?.email,
                  result?.user?.photoURL
                );
              })
              .catch(() => {});
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const saveToDatabase = (name, email, photoLink) => {
    const updatesInfo = {
      name,
      photoURL: photoLink,
      email,
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/users?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatesInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail(email);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full lg:max-w-md mx-auto">
      <Helmet>
        <title>Sign Up - Shopper's Delight</title>
      </Helmet>
      <div className="bg-white shadow sm:rounded-lg flex justify-center">
        <div className="p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-bold text-gray-700">
              Create a New Account
            </h1>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <div className="mt-4">
                <input
                  {...register("fullName", {
                    required: "Name is required",
                  })}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
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
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="file"
                />
                {errors.image && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.image?.message}
                  </p>
                )}
                <button className="mt-5 tracking-wide font-medium text-sm bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    {isProcessing ? "Processing..." : "Sign Up"}
                  </span>
                </button>
                <p className="mt-6 text-sm text-gray-600 flex items-center justify-center gap-1">
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
