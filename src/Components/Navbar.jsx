
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
     <div className="container mx-auto w-[90%] md:w-[85%] flex flex-col md:flex-row justify-between items-center border-b border-gray-200 py-4 text-gray-600 text-sm gap-2 md:gap-0">
  {/* Contact info */}
  <div className="flex gap-2 sm:gap-4 text-center md:text-left flex-wrap justify-center">
    <p>+99 891 101 11 11</p>
    <span className="hidden sm:inline">|</span>
    <p>Store location</p>
  </div>

  
  <p className="text-center text-xs sm:text-sm md:flex hidden">Tell a friend about Drou & get 20% off</p>


  <div className="flex items-center gap-2 sm:gap-4">
    <select className="border-none bg-transparent cursor-pointer outline-none text-sm">
      <option value="USD">USD</option>
      <option value="UZS">UZS</option>
      <option value="RUB">RUB</option>
    </select>   
    <span className="hidden sm:inline">|</span>
    <p>Log in / Sign up</p>
  </div>
</div>


      <div className="container mx-auto w-[85%] flex items-center justify-between py-4">
       
        <Image src="/assets/images/logo.png" alt="logo" width={150} height={60} />

      
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-semibold">
          <a href="#">HOME</a>
          <a href="#">ELECTRONICS</a>
          <a href="#">BLOG</a>
          <a href="#">PAGES</a>
          <a href="#">CONTACT</a>
        </div>

  
        <div className="flex items-center gap-6">
          <FiSearch className="text-2xl cursor-pointer" />
          <FiHeart className="text-2xl cursor-pointer" />
          <div className="relative">
            <FiShoppingBag className="text-2xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </div>

        
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

  
      <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl">
          <FiX />
        </button>
        <nav className="mt-10 flex flex-col gap-4 text-lg font-semibold text-gray-600">
          <a href="#" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#" onClick={() => setIsOpen(false)}>ELECTRONICS</a>
          <a href="#" onClick={() => setIsOpen(false)}>BLOG</a>
          <a href="#" onClick={() => setIsOpen(false)}>PAGES</a>
          <a href="#" onClick={() => setIsOpen(false)}>CONTACT</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
