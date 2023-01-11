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
      <div className="flex gap-3">
        <div className="w-full h-full">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src={article_thumb}
              className="w-full h-[180px]"
              alt={content_title}
            />
          </div>
        </div>

        <div>
          <p className="text-red-600 font-medium text-sm">{tags}</p>
          <h5 className="text-lg font-medium mb-1">
            {content_title?.slice(0, 35)}...
          </h5>
          <p className="text-gray-500 text-xs text-justify">
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
