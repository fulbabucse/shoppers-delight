import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import {
  detailsProduct,
  quantityDecrement,
  quantityIncrement,
  removeSelectedProduct,
} from "../../redux/actions/actions";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../../assets/styles.css";
import Spinner from "../../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import Review from "../Products/Review";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { url } from "../../utils/BaseURL";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";

const ProductDetails = ({ product, quantity }) => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    _id,
    title,
    thumbnail,
    price,
    rating,
    description,
    brand,
    category,
    images = [],
    discountPercentage,
  } = product;

  const [imageURL, setImageURL] = useState("");

  const discountedPrice = (price / 100) * (100 - discountPercentage);

  const subUrl = `${url}/products/${id}`;
  const fetchSingleProduct = async () => {
    const res = await axios
      .get(subUrl, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
      })
      .catch((err) => console.log(err.message));
    dispatch(detailsProduct(res.data));
  };

  const { data: similarProducts = [], isLoading } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const res = await fetch(`${url}/products/similar/${category}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    fetchSingleProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id, dispatch]);

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleAddToCart = () => {
    const cartProduct = {
      productId: _id,
      title,
      thumbnail,
      price,
      rating,
      brand,
      category,
      price: Math.floor(discountedPrice * quantity.quantity),
      quantity: quantity.quantity,
      email: user?.email,
    };

    fetch(`${url}/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ShopperToken")}`,
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product Cart Complete !!!");
        navigate("/cart");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      data-aos="zoom-out"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <Helmet>
        <title>Product Details - Shopper's Delight</title>
      </Helmet>
      {Object.keys(product).length === 0 ? (
        <>
          <Spinner />
        </>
      ) : (
        <section className="text-gray-700 body-font overflow-hidden bg-transparent">
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {images && (
                <>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                      {images?.map((image, index) => {
                        return (
                          <figure
                            key={index}
                            className="cursor-pointer overflow-hidden hover:bg-primaryColor transition-all duration-300"
                          >
                            <img
                              className="w-20 h-20 object-cover object-center rounded hover:scale-110 transition-all duration-1000 ease-in-out transform-gpu"
                              src={image}
                              alt={title}
                              onClick={() => setImageURL(image)}
                            />
                          </figure>
                        );
                      })}
                    </div>
                    <div className="overflow-hidden transition-all duration-300">
                      <InnerImageZoom
                        src={imageURL || images[0]}
                        width={400}
                        height={500}
                        hasSpacer={true}
                        zoomSrc={imageURL || images[0]}
                        zoomType="hover"
                        fadeDuration={150}
                        zoomPreload={true}
                        fullscreenOnMobile={false}
                      />
                      {/* <img
                        className="lg:w-96 w-72 h-auto object-cover object-center rounded hover:scale-150 transition-all duration-1000 ease-in-out transform-gpu"
                        src={imageURL || images[0]}
                        alt={title}
                      /> */}
                    </div>
                  </div>
                </>
              )}

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">
                  {brand}
                </h2>
                <h1 className="text-gray-800 text-xl lg:text-2xl title-font font-medium mb-1 capitalize">
                  {title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center text-red-500">
                    {ratingStar}
                    <span className="text-gray-600 ml-3">{rating}</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <p className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
                <p className="leading-relaxed text-justify">
                  {description.length > 150 ? (
                    <>{description?.slice(0, 150)}...</>
                  ) : (
                    description
                  )}
                </p>
                <div className="flex">
                  <div className="flex items-center space-x-4 my-4">
                    <div>
                      <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                        <span className="text-red-400 mr-1 mt-1">$</span>
                        <span className="font-bold text-red-600 text-3xl">
                          {Math.floor(discountedPrice)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-red-500 text-xl font-semibold">
                        Save {discountPercentage}%
                      </p>
                      <p className="text-gray-400 text-sm">
                        Inclusive of all Taxes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-center w-1/5">
                    <button
                      disabled={quantity.quantity === 1}
                      onClick={() => dispatch(quantityDecrement())}
                    >
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>

                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={quantity.quantity}
                    />

                    <button
                      disabled={quantity.quantity === 5}
                      onClick={() => dispatch(quantityIncrement())}
                    >
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                  </div>
                  {user?.email ? (
                    <>
                      <button
                        onClick={() => handleAddToCart()}
                        className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full"
                      >
                        Add to Cart
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/sign-in">
                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full">
                          Add to Cart
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-5 px-3 lg:px-0">
            <Review product={product} />
          </div>
          <div className="px-3 lg:px-0">
            <h1 className="text-xl">Similar Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
              {similarProducts?.slice(1, 5)?.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
    quantity: state.quantity,
  };
};

export default connect(mapStateToProps)(ProductDetails);
