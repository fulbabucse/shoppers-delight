import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { navbarNewProducts } from "../../../redux/actions/actions";
import "../../../assets/styles.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import LatestProductCard from "./LatestProductCard";
import { url } from "../../../utils/BaseURL";
import { useState } from "react";
import Spinner from "../../../components/Spinner";

const LatestProducts = ({ products }) => {
  const [loading, setLoading] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
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
  // setLoading(true);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${url}/products/all`)
      .then((res) => {
        setLoading(true);
        console.log(res);
        dispatch(navbarNewProducts(res.data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="my-10 px-4 lg:px-0">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-xl lg:text-2xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 roboto-font">
          Latest Products
        </h1>
        <Link
          to="/products"
          className="text-sm flex gap-1 items-center hover:text-red-500 transition-all duration-300 font-medium"
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
        {products?.newProducts?.products?.slice(0, 20)?.map((product) => (
          <LatestProductCard key={product?._id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.newProducts,
  };
};

export default connect(mapStateToProps)(LatestProducts);
