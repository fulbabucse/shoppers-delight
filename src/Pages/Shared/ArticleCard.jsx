import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const ArticleCard = ({ article }) => {
  const {
    content_title,
    content,
    article_thumb,
    comment,
    published_date,
    tags,
  } = article;
  return (
    <section className="flex flex-row flex-wrap mx-auto mr-4">
      <div class="flex gap-3">
        <div class="w-full h-full">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src={article_thumb}
              class="w-full h-[180px]"
              alt={content_title}
            />
            <a>
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>

        <div>
          <p class="text-red-600 font-medium text-sm">{tags}</p>
          <h5 class="text-lg font-medium mb-1">
            {content_title?.slice(0, 35)}...
          </h5>
          <p class="text-gray-500 text-xs text-justify">
            {content?.slice(0, 70)}...
            <Link className="text-red-500 font-medium">Read more</Link>
          </p>
          <hr className="my-3 border text-gray-600" />
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-gray-700 text-sm">
              <FaCalendarAlt />
              <span>{published_date}</span>
            </p>
            <p className="flex items-center gap-1 text-gray-700 text-sm">
              <HiChatBubbleLeftRight />
              {comment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
