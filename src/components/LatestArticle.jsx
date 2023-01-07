import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "../assets/styles.css";
import ArticleCard from "../Pages/Shared/ArticleCard";
import { latestArticle } from "../redux/actions/actions";

const LatestArticle = ({ articles }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("article.json")
      .then((res) => {
        dispatch(latestArticle(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="2xl:mx-auto 2xl:container lg:px-20 md:py-12 md:px-6 px-4 w-96 sm:w-auto">
      <div role="main" className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
          Latest Article
        </h1>
        <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Popular Item in the market
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles?.articles?.map((article) => (
          <ArticleCard key={article?.id} article={article} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(LatestArticle);
