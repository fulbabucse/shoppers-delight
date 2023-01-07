import React from "react";
import Category from "../components/Category";
import Collections from "../components/Collections";
import Discount from "../components/Discount";
import HeroSection from "../components/HeroSection";
import LatestArticle from "../components/LatestArticle";
import Tops from "../components/Tops";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Collections />
      <Tops />
      <Discount />
      <LatestArticle />
    </div>
  );
};

export default Home;
