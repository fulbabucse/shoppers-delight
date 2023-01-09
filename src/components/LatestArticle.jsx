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
    <div className="bg-white p-3 rounded-md">
      <div>
        <h1 className="text-xl lg:text-3xl font-medium tracking-wide text-gray-800 dark:text-gray-50 bebas-neu-font">
          Latest News
        </h1>
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
