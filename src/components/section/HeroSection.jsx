import React from "react";
import HeroBanner from "../../assets/img/HeroBanner.png";
import HeroBannerMobile from "../../assets/img/HeroBannerMobile.png";
import Header from "../Header";

const HeroSection = () => {
  return (
    <section>
      <Header />
      <img src={HeroBannerMobile} alt="" className="md:hidden" width="100%" />
      <img src={HeroBanner} alt="" className="hidden md:block" width="100%" />
    </section>
  );
};

export default HeroSection;
