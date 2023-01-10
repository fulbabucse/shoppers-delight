import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import SingleReviewCard from "../Shared/SingleReviewCard";

const Review = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, description } = product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", _id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reviews/${_id}`);
      const data = await res.json();
      return data;
    },
  });

  const handleReviews = (userData) => {
    const review = {
      productId: _id,
      name: user?.displayName,
      email: user.email,
      image: user?.photoURL,
      joinDate: user?.metadata?.creationTime,
      rating: userData.rating,
      message: userData.message,
      createAt: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1 className="text-xl">Review of {title}</h1>
      <ul
        class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab3"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            href="#tab-descriptions"
            class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-descriptions"
            data-bs-toggle="pill"
            data-bs-target="#tab-descriptions"
            role="tab"
            aria-controls="tab-descriptions"
            aria-selected="true"
          >
            Descriptions
          </a>
        </li>

        <li class="nav-item" role="presentation">
          <a
            href="#tab-comments"
            class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-comments"
            data-bs-toggle="pill"
            data-bs-target="#tab-comments"
            role="tab"
            aria-controls="tab-comments"
            aria-selected="false"
          >
            Comment's
          </a>
        </li>

        <li class="nav-item" role="presentation">
          <a
            href="#tabs-reviews"
            class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-reviews"
            role="tab"
            aria-controls="tabs-reviews"
            aria-selected="false"
          >
            Review
          </a>
        </li>
      </ul>
      <div class="tab-content" id="tabs-tabContent3">
        <div
          class="tab-pane fade show active"
          id="tab-descriptions"
          role="tabpanel"
          aria-labelledby="tabs-descriptions"
        >
          {description}
        </div>
        <div
          class="tab-pane fade"
          id="tab-comments"
          role="tabpanel"
          aria-labelledby="tabs-comments"
        >
          Coming soon...
        </div>
        <div
          class="tab-pane fade"
          id="tabs-reviews"
          role="tabpanel"
          aria-labelledby="tabs-comments"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg text-gray-700 roboto-font mb-2">
                Total Review {reviews?.length}
              </h4>
              <div className="flex flex-col gap-4">
                {reviews?.map((review) => (
                  <SingleReviewCard key={review?._id} review={review} />
                ))}
              </div>
            </div>

            <div>
              <div class="block rounded-lg max-w-md">
                <h4 className="text-lg text-gray-700 roboto-font mb-2">
                  Add a Review
                </h4>
                <form
                  onSubmit={handleSubmit(handleReviews)}
                  className="space-y-3"
                >
                  <div class="form-group">
                    <input
                      {...register("rating", {
                        required: "Rating is required",
                      })}
                      type="text"
                      class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Your Rating"
                    />
                    {errors.rating && (
                      <p className="text-red-400 text-sm font-medium">
                        {errors.rating?.message}
                      </p>
                    )}
                  </div>
                  <div class="form-group">
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Enter Message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm font-medium">
                        {errors.message?.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    class="rounded-full w-full bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
