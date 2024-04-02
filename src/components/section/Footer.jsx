import React from "react";
import Facebook from "../../assets/icons/fb-icon.svg";
import Instagram from "../../assets/icons/ig-icon.svg";
import Logo from "../../assets/icons/logo.svg";
import Twitter from "../../assets/icons/twitter-icon.svg";
import Youtube from "../../assets/icons/yt-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-secondary md:px-32 mt-10 md:py-16 rounded-t-3xl py-6 px-4 to-[#FFE7BA]">
      <div className="bg-primary md:flex md:justify-between md:gap-x-10 p-6 rounded-2xl">
        <p className="font-bold md:w-[389px] text-white capitalize text-xl">
          Register now so you don't miss our programs
        </p>
        <div className="bg-white md:flex-1 md:flex md:gap-x-4 space-y-4 md:space-y-0 mt-6 p-4 md:mt-0 rounded-[14px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="border w-full border-neutral_60 rounded-lg px-6 py-3"
          />
          <button className="bg-primary w-full md:w-fit text-white px-8 py-3 rounded-lg font-bold">
            Subscribe
          </button>
        </div>
      </div>
      <nav className="border-b md:flex-row flex flex-col py-10 md:justify-between border-neutral_60">
        <div className="flex items-center md:gap-x-10 justify-between">
          <a href="#" className="text-neutral_100 font-medium text-base">
            Home
          </a>
          <a href="#" className="text-neutral_100 font-medium text-base">
            Category
          </a>
          <a href="#" className="text-neutral_100 font-medium text-base">
            About
          </a>
          <a href="#" className="text-neutral_100 font-medium text-base">
            Contact
          </a>
        </div>
        <div className="flex items-center md:items-end justify-between mx-auto md:mx-0 w-52 mt-8 md:mt-0">
          <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          <img src={Instagram} alt="Instagram" className="w-6 h-6" />
          <img src={Youtube} alt="Youtube" className="w-6 h-6" />
        </div>
      </nav>
      <div className="py-10 md:py-0 md:flex md:justify-between mt-8">
        <img src={Logo} alt="Logo" className="mx-auto md:mx-0 w-32" />
        <div>
          <p className="font-medium text-neutral_60 text-center text-sm mt-8 md:mt-0">
            Terms of Service Privacy policy
          </p>
          <p className="font-normal text-neutral_60 text-center md:text-left text-xs mt-4">
            © 2022 Monito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
