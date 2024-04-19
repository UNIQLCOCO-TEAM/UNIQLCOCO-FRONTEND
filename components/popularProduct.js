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
];

const ProductCard = ({ product }) => {
  return (
    <button>
      <div className="border rounded p-4 m-4 font-sukhumvit flex flex-col">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover mb-4"
        />
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold mb-2 text-black">{product.name}</h2>
          <p className="text-black text-xlfont-semibold">Price: {product.price} บาท</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-grey1 font-semibold">{product.color}</p>
        </div>
      </div>
    </button>
  );
};

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
