import React from "react";
import Navbar from "../../../components/navbar";
import ProductList from "../../../components/popularProduct";


export default function Home() {
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="relative">
        <img src="/Home.png" className="w-full h-auto" alt="Background Image" />

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white mt-12 md:mt-24 lg:mt-32 xl:mt-32">
          WELCOME TO
        </div>

        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 md:h-14 lg:h-24 xl:h-32 w-auto mt-2 md:mt-2 lg:mt-15 xl:mt-15"
          src="/LOGO1.png"
          alt="Your Company"
        />

        <button className="absolute z-10 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 md:mt-4 lg:mt-6 xl:mt-6 text-sm md:text-sm lg:text-xl xl:text-xl font-semibold text-white border border-white rounded-full px-4 py-2 bg-transparent hover:bg-white hover:text-black hover:border-transparent transition duration-300">
          SHOP NOW
        </button>
      </div>

      <div className="bg-white">
        <div className="pl-10 pt-16 pb-10 md:pl-9 lg:pl-24 xl:pl-32 md:pb-5 lg:pb-10 xl:pb-10 text-xl md:text-xl lg:text-xxl xl:text-xxxl font-bold text-green1">POPULAR</div>
      </div>
      <div className="bg-white px-8">
        <ProductList />
      </div>
    </div>
  );
}
