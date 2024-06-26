import React from "react";
import Navbar from "../../../components/navbar";
import ProductList from "../../../components/popularProduct";
import Image from "next/image";
import Footer from "../../../components/footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const redirect = () => {
    router.replace("/shirts");
  };
  return (
    <div className="h-screen ">
      <div>
        <Navbar path={"home"} />
      </div>
      <div className="">
        <div className="relative">
          <Image
            src="/Home.png"
            className="h-auto w-full"
            alt="Background Image"
            width={1440}
            height={900}
          />

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-xxl lg:text-xxxl xl:text-5xl font-bold text-white mt-6 md:mt-24 lg:mt-32 xl:mt-32">
            WELCOME TO
          </div>

          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 md:h-24 lg:h-24 xl:h-40 w-auto mt-0 md:mt-4 lg:mt-15 xl:mt-15"
            src="/LOGO1.png"
            alt="logo01"
            width={48}
            height={48}
          />

          <button
            className="absolute z-10 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 md:mt-4 lg:mt-6 xl:mt-6 text-base md:text-lg lg:text-lg xl:text-xl font-semibold text-white border border-white rounded-full px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-4 bg-transparent hover:bg-white hover:text-black hover:border-transparent transition duration-300"
            onClick={redirect}
          >
            SHOP NOW
          </button>
        </div>

        <div className="bg-white">
          <div className="pl-10 pt-16 pb-10 md:pl-9 lg:pl-24 xl:pl-32 md:pb-5 lg:pb-10 xl:pb-10 text-xl md:text-xl lg:text-xxl xl:text-xxxl font-bold text-green1">
            POPULAR
          </div>
        </div>
        <div className="bg-white px-8">
          <ProductList />
        </div>
      </div>
      <div className="bottom-0 w-full mt-2">
        <Footer />
      </div>
    </div>
  );
}
