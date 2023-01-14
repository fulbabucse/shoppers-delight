import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const BillingAddress = () => {
  const { user } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleBillingAddress = (userData) => {
    const billingData = {
      name: user?.displayName,
      email: user?.email,
      phone: userData.phone,
      street: userData.street,
      zip_code: userData.zipCode,
      city: userData.city,
      country: userData.country,
    };

    fetch(`http://localhost:5000/billing`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
      },
      body: JSON.stringify(billingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/checkout/payments");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="leading-loose">
      <Helmet>
        <title>Billing Address - Shopper's Delight</title>
      </Helmet>
      <p className="text-gray-800 font-medium text-center">
        Billing information
      </p>
      <form
        onSubmit={handleSubmit(handleBillingAddress)}
        className="max-w-xl mx-auto m-4 p-10 bg-white rounded shadow-xl space-y-4"
      >
        <div>
          <input
            defaultValue={user?.displayName}
            readOnly
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            defaultValue={user?.email}
            readOnly
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            {...register("phone", {
              required: "Phone Number is required",
            })}
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            type="text"
            placeholder="Phone Number"
            aria-label="Name"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm font-medium">
              {errors.phone?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("street", {
              required: "Street is required",
            })}
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            type="text"
            placeholder="Street"
          />
          {errors.street && (
            <p className="text-red-400 text-sm font-medium">
              {errors.street?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("city", {
              required: "City is required",
            })}
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            type="text"
            placeholder="City"
          />
          {errors.city && (
            <p className="text-red-400 text-sm font-medium">
              {errors.city?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("country", {
              required: "Country is required",
            })}
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            type="text"
            placeholder="Country"
          />
          {errors.country && (
            <p className="text-red-400 text-sm font-medium">
              {errors.country?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("zipCode", {
              required: "Zip is required",
            })}
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            type="text"
            placeholder="Zip"
          />
          {errors.zipCode && (
            <p className="text-red-400 text-sm font-medium">
              {errors.zipCode?.message}
            </p>
          )}
        </div>
        <div className="mt-4">
          <button
            className="bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 text-sm rounded-full"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
