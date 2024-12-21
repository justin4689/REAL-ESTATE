import React, { useState } from "react";
import { assets } from "../assets/assets";



const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10 flex justify-between items-center px-10 py-5">
      <div>
        <img src={assets.logo} alt="logo" />
      </div>
      <ul className="hidden md:flex gap-10">
        <li>
          <a href="#home" className="cursor-pointer text-white hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="cursor-pointer text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#Projects" className="cursor-pointer text-white hover:text-gray-400">
            Projects 
          </a>
        </li>
        <li>
          <a href="#Testimonials" className="cursor-pointer text-white hover:text-gray-400">
            Testimonials
          </a>
        </li>
      </ul>
      <div>
        <button className="hidden md:block bg-white px-8 py-4 rounded-full">
          Sign Up
        </button>
      </div>
      <div className="md:hidden w-7 flex absolute right-9 top-8">
        <img src={assets.menu_icon} alt="menu" className="cursor-pointer hover:scale-110 transition-all duration-300" onClick={() => setShowMobileMenu(true)} />

      </div>
      {/* ---------mobile-menu---------- */}
      <div className="md:hidden transition-all duration-300">
        <div className={`fixed top-0 left-0 w-full h-screen bg-white flex justify-center items-center transition-all duration-300 ${showMobileMenu ? 'block' : 'hidden'}`}>
            <div className="absolute top-6 right-6">
                <img src={assets.cross_icon} alt="cross" className="w-7" onClick={() => setShowMobileMenu(false)} />
            </div>
          <ul className="flex flex-col gap-10 text-black text-2xl">
            <li onClick={() => setShowMobileMenu(false)}>Home</li>
            <li onClick={() => setShowMobileMenu(false)}>About</li>
            <li onClick={() => setShowMobileMenu(false)}>Projects</li>
            <li onClick={() => setShowMobileMenu(false)}>Testimonials</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
