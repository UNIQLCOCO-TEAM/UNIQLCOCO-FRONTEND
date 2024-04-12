import React from "react";

const products = [
  {
    id: 1,
    name: "กางเกงขายาวชิโน่ผู้ชาย",
    price: 990,
    color: "สีดำ",
    image: "/pant.jpeg",
  },
  {
    id: 2,
    name: "กางเกงขายาวชิโน่ผู้ชาย",
    price: 990,
    color: "สีดำ",
    image: "/pant.jpeg",
  },
  {
    id: 3,
    name: "กางเกงขายาวชิโน่ผู้ชาย",
    price: 990,
    color: "สีดำ",
    image: "/pant.jpeg",
  },
  {
    id: 4,
    name: "กางเกงขายาวชิโน่ผู้ชาย",
    price: 990,
    color: "สีดำ",
    image: "/pant.jpeg",
  },
  {
    id: 5,
    name: "กางเกงขายาวชิโน่ผู้ชาย",
    price: 990,
    color: "สีดำ",
    image: "/pant.jpeg",
  },
  {
    id: 6,
    name: "กางเกงขายาวชิโน่ผู้ชาย",
    price: 990,
    color: "สีดำ",
    image: "/pant.jpeg",
  },
];

const ProductCard = ({ product }) => {
  return (
    <button>
      <div className="border rounded p-1 m-1 font-sukhumvit flex flex-col">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover mb-4"
        />
        <div className="flex justify-between items-start">
          <h2 className="font-bold items-center  mb-2 ml-1 text-base md:text-xl lg:text-xl xl:text-xl ">{product.name}</h2>
          <p className="text-black items-center font-semibold text-base md:text-base lg:text-xl xl:text-xl">{product.price} บาท</p>
        </div>
        <div className="flex justify-between items-start mb-5">
          <p className="text-grey1 font-semibold ml-1 text-sm md:text-sm lg:text-lg xl:text-lg">{product.color}</p>
        </div>
      </div>
    </button>
  );
};

const PantsList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default PantsList;
