import React from "react";
import Category from "../components/Category";
import Collections from "../components/Collections";
import HeroSection from "../components/HeroSection";
import Tops from "../components/Tops";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Collections />
      <Tops />
    </div>
  );
};

export default Home;
