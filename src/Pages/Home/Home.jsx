import React from "react";
import BestSellers from "./BestSellers";
import Category from "../Products/Category";
import Collections from "./Collections";
import Discount from "./Discount";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import Tops from "./Tops";
import LatestArticle from "./LatestArticle";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Tops />
      <Collections />
      <BestSellers />
      <Discount />
      <LatestArticle />
      <Testimonials />
      <Features />
    </div>
  );
};

export default Home;
