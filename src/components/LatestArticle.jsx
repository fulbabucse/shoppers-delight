import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "../assets/styles.css";
import ArticleCard from "../Pages/Shared/ArticleCard";
import { latestArticle } from "../redux/actions/actions";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LatestArticle = ({ articles }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
        <h1 className="text-xl lg:text-3xl font-medium tracking-wide text-gray-800 dark:text-gray-50 bebas-neu-font mb-2">
          Latest News
        </h1>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerclassName="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
      >
        {articles?.articles?.map((article) => (
          <ArticleCard key={article?.id} article={article} />
        ))}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(LatestArticle);
