import Banner from "@/components/Banner";
import BannerThree from "@/components/BannerThree";
import BannerTwo from "@/components/BannerTwo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Banner />
      <BannerTwo />
      <BannerThree />
    </>
  );
};

export default Home;
