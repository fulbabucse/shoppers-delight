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
import { Helmet } from "react-helmet";
import NavbarProducts from "../Shared/Navbar/NavbarProducts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Shopper's Delight</title>
      </Helmet>
      <HeroSection />
      <Category />
      <NavbarProducts />
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
