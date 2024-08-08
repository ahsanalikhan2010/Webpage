import React, { useState } from "react";
import Logo from "../components/images/logo.jpeg";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home" className="container">
      <nav className="fixed top-0 left-0 w-full z-10 h-18 bg-[#ebf3ff] shadow-md text-black font-normal uppercase">
        <div className="container mx-auto lg:px-[8%] lg:py-[1%] md:space-x-[90%] space-x-[75%] lg:px-[2%] lg:space-x-[18%] flex justify-start items-center">
          <div className="flex items-center lg:pl-[12%] pl-2 pt-2  ">
            <img src={Logo} alt="Logo" className=" h-10 rounded-full" />
          </div>

          <div className="hidden lg:flex space-x-40 items-center text-[#1e4682] font-semibold">
            <ul className="flex space-x-16 items-center justify-center">
              <li className="hover-custom">
                <a href="#home">Home</a>
              </li>
              <li className="hover-custom">
                <a href="#about-us">About Us</a>
              </li>
              <li className="hover-custom">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-[#ebf3ff]">
            <ul className="space-y-2 p-4 text-center flex flex-col">
              <li className="hover-custom">
                <a href="#home">Home</a>
              </li>
              <li className="hover-custom">
                <a href="#about-us">About Us</a>
              </li>
              <li className="hover-custom">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
