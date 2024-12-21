import React from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.header_img})` }}
      id="Header"
    >
      <Navbar />
      <div className="">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center ">
          Explore homes that fit your dreams
        </h2>
        <div className="flex justify-center items-center space-x-6 mt-10">
          <a href="#Projects" className="border border-white px-8 py-3 rounded text-white ">Projects</a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded text-white">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
