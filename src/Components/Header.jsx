import React from 'react';
import Image from "next/image";

const Header = () => {
  return (
    <div className='bg-[#F9F9F9]'>
        <div className="container  mx-auto w-[90%] md:w-[85%] min-h-[620px] flex flex-col-reverse md:flex-row items-center justify-between md:px-10">
      {/* Matn qismi */}
      <div className="text-center md:text-left md:w-1/2 space-y-4 mt-6 md:mt-0">
        <p className="text-orange-500 font-semibold">SALE UP TO 30% OFF</p>
        <h1 className="text-3xl md:text-5xl font-bold">Apple Watch Series</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Featured packed at a better value than ever with powerful sensors to monitor your fitness.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full mt-3 hover:bg-orange-600 transition">
          Shop Now →
        </button>
      </div>

      {/* Rasm qismi */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src="/assets/images/apple.png" alt="Apple Watch" width={600} height={350} className="max-w-full h-auto" />
      </div>

      {/* Slider indikator (pastda chiqadi) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-6 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
    </div>


  
  );
};

export default Header;
