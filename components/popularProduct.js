import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const imageLoader = ({ src }) => {
    return `http://192.168.1.5:8081${src}`;
  };

  const productType = product.type == 1 ? "shirts" : "pants";

  return (
    <button>
      <a href={`/${productType}/productDetail/${product.id}`}>
        <div className="border rounded p-1 m-1 font-sukhumvit flex flex-col">
          <Image
            loader={imageLoader}
            src={product.image_file}
            alt={product.title}
            width={20}
            height={20}
            className="w-full h-auto object-cover mb-4"
          />
          <div className="flex justify-between items-start">
            <h2 className="font-bold items-center  mb-2 ml-1 text-base md:text-lg lg:text-lg xl:text-xl text-black">
              {product.title}
            </h2>
            <p className="text-black items-center font-semibold text-base md:text-base lg:text-xl xl:text-xl">
              {parseInt(product.price).toLocaleString()} บาท
            </p>
          </div>
          <div className="flex justify-between items-start mb-5">
            <p className="text-grey1 font-semibold ml-1 text-sm md:text-sm lg:text-base xl:text-lg">
              {product.color}
            </p>
          </div>
          <div className="flex justify-between items-start mb-5">
            <p className="text-grey1 font-semibold ml-1 text-sm md:text-sm lg:text-base xl:text-lg">
              ขนาด {product.size}
            </p>
          </div>
        </div>
      </a>
    </button>
  );
};

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const access_token = typeof window !== 'undefined' ? localStorage.getItem("access_token") : "";
  const handleProductList = async (access_token) => {
    const API_URL = `http://192.168.1.5:8082/order/popular`;
    try {
      const result = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const result = await handleProductList(access_token);
        const productsList = JSON.parse(result).result;
        const newProductsList = [];
        Array.from(productsList).map((product, _index) => {
          newProductsList.push({
            ...product,
          });
        });
        setProductList(newProductsList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductList();
  }, [access_token]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4">
      {Array.from(productList).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
