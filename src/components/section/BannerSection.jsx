import React from "react";
import Banner from "../../assets/img/Banner.png";
import BannerMobile from "../../assets/img/BannerMobile.png";

const BannerSection = () => {
  return (
    <section className="my-8 px-4 md:px-32 md:pt-10">
      <img src={BannerMobile} alt="" className="md:hidden" width="100%" />
      <img src={Banner} alt="" className="hidden md:block" width="100%" />
    </section>
  );
};

export default BannerSection;
