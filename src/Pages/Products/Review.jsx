import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { title, description } = product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReviews = (userData) => {
    console.log(userData);
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
            <article className="border p-3">
              <div class="flex items-center mb-2 space-x-4">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://fulbabu.vercel.app/static/media/developer.3030145d3eb346c97905.jpg"
                  alt=""
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>
                    {user?.displayName}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined on {user?.metadata?.creationTime}
                    </time>
                  </p>
                </div>
              </div>
              <div class="flex items-center mb-1">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Reviewed in the United Kingdom on{" "}
                  <time datetime="2017-03-03 19:00">March 3, 2017</time>
                </p>
              </footer>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
              <button class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                Read more
              </button>
            </article>

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
