import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { navbarNewProducts } from "../../../redux/actions/actions";
import "../../../assets/styles.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarProductCard from "./NavbarProductCard";

const NavbarProducts = ({ products }) => {
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
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("newProducts.json")
      .then((res) => {
        dispatch(navbarNewProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-2xl font-medium tracking-wide leading-9 text-gray-800 dark:text-gray-50 roboto-font">
          Latest Products
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
        {products?.newProducts?.map((product) => (
          <NavbarProductCard key={product?._id} product={product} />
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

export default connect(mapStateToProps)(NavbarProducts);
