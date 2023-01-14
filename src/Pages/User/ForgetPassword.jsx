import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgetPassword = (userData) => {
    setIsProcessing(true);
    forgetPassword(userData.email)
      .then(() => {
        toast.success("Check your mail Inbox or Spam folder");
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
        setIsProcessing(false);
      });
  };

  return (
    <div className="h-full bg-transparent w-full py-8 px-4">
      <Helmet>
        <title>Forget Password - Shopper's Delight</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex="0"
            className="focus:outline-none text-xl font-extrabold leading-6 text-gray-800 mb-4 text-center"
          >
            Forget Password
          </p>
          <form onSubmit={handleSubmit(handleForgetPassword)}>
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
            <div className="mt-8">
              <button
                type="submit"
                className="flex items-center justify-center focus:ring-2 focus:ring-offset-2 focus:ring-red-700 rounded-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 w-full"
              >
                <FaSignInAlt />
                <span className="ml-3">
                  {isProcessing ? "Processing..." : "Sent code"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
