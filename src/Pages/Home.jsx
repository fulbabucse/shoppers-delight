import React from "react";
import BestSellers from "../components/BestSellers";
import Category from "../components/Category";
import Collections from "../components/Collections";
import Discount from "../components/Discount";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import LatestArticle from "../components/LatestArticle";
import Tops from "../components/Tops";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Tops />
      <Collections />
      <BestSellers />
      <Discount />
      <Features />
      <LatestArticle />
    </div>
  );
};

export default Home;
