import React from "react";

const products = [
  {
    id: 1,
    name: "เสื้อคอกลมผู้ชายผ้าถัก",
    price: 200,
    color: "สีฟ้าท๊อปดราย",
    image: "/shirt.jpeg",
  },
  {
    id: 2,
    name: "เสื้อคอกลมผู้ชายผ้าถัก",
    price: 200,
    color: "สีฟ้าท๊อปดราย",
    image: "/shirt.jpeg",
  },
  {
    id: 3,
    name: "เสื้อคอกลมผู้ชายผ้าถัก",
    price: 200,
    color: "สีฟ้าท๊อปดราย",
    image: "/shirt.jpeg",
  },
  {
    id: 4,
    name: "เสื้อคอกลมผู้ชายผ้าถัก",
    price: 200,
    color: "สีฟ้าท๊อปดราย",
    image: "/shirt.jpeg",
  },
  {
    id: 5,
    name: "เสื้อคอกลมผู้ชายผ้าถัก",
    price: 200,
    color: "สีฟ้าท๊อปดราย",
    image: "/shirt.jpeg",
  },
  {
    id: 6,
    name: "เสื้อคอกลมผู้ชายผ้าถัก",
    price: 200,
    color: "สีฟ้าท๊อปดราย",
    image: "/shirt.jpeg",
  },
];

const ProductCard = ({ product }) => {
  return (
    <button>
      <a href="/productDetail">
        <div className="border rounded p-1 m-1 font-sukhumvit flex flex-col">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover mb-4"
          />
          <div className="flex justify-between items-start">
            <h2 className="font-bold items-center  mb-2 ml-1 text-base md:text-lg lg:text-lg xl:text-xl ">
              {product.name}
            </h2>
            <p className="text-black items-center font-semibold text-base md:text-base lg:text-xl xl:text-xl">
              {product.price} บาท
            </p>
          </div>
          <div className="flex justify-between items-start mb-5">
            <p className="text-grey1 font-semibold ml-1 text-sm md:text-sm lg:text-base xl:text-lg">
              {product.color}
            </p>
          </div>
        </div>
      </a>
    </button>
  );
};

const ShirtsList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShirtsList;
