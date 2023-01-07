import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import TopProductCard from "../Pages/Shared/TopProductCard";
import { topProducts } from "../redux/actions/actions";

const Tops = ({ products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("topsProducts.json")
      .then((res) => {
        dispatch(topProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-between 2xl:mx-auto 2xl:container lg:px-20 md:py-12 md:px-6 px-4 w-96 sm:w-auto flex-wrap lg:flex-nowrap">
      <div>
        <h1 className="text-2xl font-medium uppercase text-gray-700">
          Hot Trend
          <p className="h-[3px] w-20 bg-red-400"></p>
        </h1>
        <div className="flex flex-col gap-2">
          {products?.topProducts?.map((product) => (
            <TopProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium uppercase text-gray-700">
          Best Seller
          <p className="h-[3px] w-20 bg-red-400"></p>
        </h1>
        <div className="flex flex-col gap-2">
          {products?.topProducts?.map((product) => (
            <TopProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium uppercase text-gray-700">
          Features
          <p className="h-[3px] w-20 bg-red-400"></p>
        </h1>
        <div className="flex flex-col gap-2">
          {products?.topProducts?.map((product) => (
            <TopProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.topProducts,
  };
};

export default connect(mapStateToProps)(Tops);
