import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latestArticle } from "../../../redux/actions/actions";
import ArticleCard from "../ArticleCard";
import "../../../assets/styles.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarProducts = ({ articles }) => {
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
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 roboto-font">
          New Products
        </h1>
        <Link
          to="/products"
          className="flex gap-1 items-center hover:text-red-500 transition-all duration-300 font-medium"
        >
          <span>All Products</span>
          <span>
            <FaAngleRight />
          </span>
        </Link>
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

export default connect(mapStateToProps)(NavbarProducts);
