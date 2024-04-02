import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import "../index.css";
import Button from "./Button";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive);
  };

  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  return (
    <header className="bg-transparent absolute top-0 py-4 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center relative">
          <div className="md:px-6 ml-32">
            <img src={Logo} alt="Logo" className="md:w-32 w-24" />
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={ToggleClass}
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute left-4 top-3 lg:hidden ${
                isActive ? "hamburger-active" : "null"
              }`}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left "></span>
            </button>
            <SearchIcon className="w-6 absolute top-2 right-4 md:hidden h-6 text-primary" />
            <nav
              id="nav-menu"
              className={`absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full left-4 top-10 lg:flex gap-x-8 lg:items-center lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                isActive ? "null bg-white" : "hidden"
              }`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-primary font-bold py-2 mx-8 flex group-hover:underline transition-all"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-primary font-bold py-2 mx-8 flex group-hover:underline transition-all"
                  >
                    Category
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-primary font-bold py-2 mx-8 flex group-hover:underline transition-all "
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#clients"
                    className="text-base text-primary font-bold py-2 mx-8 flex group-hover:underline transition-all"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="hidden lg:flex items-center gap-x-4">
                <div className="relative w-[280px]">
                  <SearchIcon className="w-6 absolute top-1/2 left-4 -translate-y-1/2 h-6 text-primary" />
                  <input
                    type="text"
                    className="px-14 py-3 rounded-full"
                    placeholder="Search something here! "
                  />
                </div>
                <Button title="Join The Community" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
