import Navbar from "../../../components/navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../../../components/footer";

export default function Carts() {
  const [carts, setCarts] = useState([]);
  const [fees, setFees] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDisable, setIsDisable] = useState(true);
  const [cartID, setCartID] = useState(0);

  const removeFromCart = async ({ id }) => {
    let updateCart = [];
    let updateTotalPrice = 0;
    let productList = [];
    carts.forEach((product) => {
      if (product.id != id) {
        productList.push(product.id);
        updateCart.push(product);
        updateTotalPrice += product.price;
      }
    });
    setFees(updateCart.length > 5 ? 0 : updateCart == 0 ? 0 : 80);
    setTotalPrice(updateTotalPrice);
    setCarts(updateCart);
    setIsDisable(updateCart.length == 0 ? true : false);

    try {
      const result = await handleUpdateCart(
        uid,
        productList,
        cartID,
        access_token
      );
      console.log(JSON.parse(result));
    } catch (err) {
      console.error(err);
    }
  };

  const imageLoader = ({ src }) => {
    return `http://192.168.1.5:8081${src}`;
  };

  const uid = 1;
  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldkBsb2NhbC5jb20iLCJpYXQiOjE3MTM3ODk5ODcsImV4cCI6MTcxMzgwMDc4N30.vYoqgcHtZMxe_Y98jKOWhf7LWcZ7Fs0eTT9TXy4Uofc";

  const handleCurrentCart = async (id, access_token) => {
    const API_URL = `http://192.168.1.5:8081/cart/uid/${id}`;
    try {
      const result = await fetch(API_URL, {
        method: "GET",
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

  const handleUpdateCart = async (uid, productList, cartID, access_token) => {
    const API_URL = `http://192.168.1.5:8081/cart/${cartID}`;
    const information = {
      status: 0,
      products_id: productList,
      uid: uid,
    };
    try {
      const result = await fetch(API_URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(information),
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
    const fetchCurrentCart = async () => {
      const result = await handleCurrentCart(uid, access_token);
      const currentCartData = JSON.parse(result).result;
      if (currentCartData != null) {
        setCartID(currentCartData.id);
        setFees(currentCartData.fees);
        setTotalPrice(currentCartData.total_price);
        setCarts(currentCartData.carts);
        setIsDisable(false);
      }
    };
    fetchCurrentCart();
  }, [access_token, uid]);

  return (
    <div className="font-sukhumvit bg-white h-full">
      <Navbar />
      <div className="bg-white">
        <div className="text-greenapp px-10 md:px-10 lg:px-15 xl:px-32 py-5 md:py-5 lg:py-10 xl:py-15 font-bold text-xxl md:text-xxl lg:text-xxxl xl:text-xxxl">
          YOUR
          <span className="ml-3 text-black font-bold text-xxl md:text-xxl lg:text-xxxl xl:text-xxxl">
            CARTS
          </span>
        </div>
      </div>

      <div className="h-screen bg-white font-sukhumvit">
        <div className="relative bg-white">
          <div className="w-full bg-white  max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            {carts?.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border-2 border-gray-200 bg-greenbg p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
              >
                <div className="col-span-12 lg:col-span-2 img box">
                  <Image
                    loader={imageLoader}
                    src={product.image_file}
                    alt={product.title}
                    width={30}
                    height={30}
                    className="max-lg:w-full lg:w-[180px] "
                  />
                </div>
                <div className="col-span-12 lg:col-span-10 detail lg:pl-3">
                  <div className="flex items-center justify-start mb-2">
                    <h5 className="font-bold text-xxl text-gray-900 mr-auto">
                      {product.title}
                    </h5>
                    <div className="flex items-center justift-end mt-4 mb-4">
                      <button
                        className="rounded-full group flex items-center justify-end focus-within:outline-red-500 ml-auto"
                        onClick={() => removeFromCart({ id: product.id })}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                            cx="17"
                            cy="17"
                            r="17"
                            fill=""
                          />
                          <path
                            className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                            d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                            stroke="#EF4444"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="font-semi-bold text-l leading-7 text-gray-500 mb-6">
                    {product.color}
                  </div>
                  <div className="font-bold text-black text-l leading-7 mb-6">
                    ขนาด: {product.size}
                  </div>
                  <div className="flex justify-between items-center">
                    {/* Your quantity buttons and input here */}
                    <h6 className="text-black font-bold text-2xl leading-9 text-right">
                      {product.price} บาท
                    </h6>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-xl p-6 max-lg:max-w-xl max-lg:mx-auto font-sukhumvit w-full bg-lightgrey">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-normal text-xl leading-8 text-gray-400">
                  รวม
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900">
                  {parseInt(totalPrice).toLocaleString()} บาท
                </h6>
              </div>
              <div className="flex items-center justify-between w-full pb-6 border-b-2 border-greenapp ">
                <p className="font-normal text-xl leading-8 text-gray-400">
                  การจัดส่งสินค้า
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900">
                  {fees} บาท
                </h6>
              </div>
              <div className="flex items-center justify-between w-full py-3">
                <p className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                  ราคารวม
                </p>
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-greenapp">
                  {parseInt(totalPrice + fees).toLocaleString()} บาท
                </h6>
              </div>
            </div>
          </div>
          <div className="bg-white flex items-center flex-col sm:flex-row justify-center gap-3  py-10">
            <a
              href="/home"
              className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500  hover:bg-grey1"
            >
              <span className="px-2 font-semibold text-xl leading-8 text-black">
                Back to Shopping
              </span>
            </a>
            <a
              href="/payment"
              style={
                isDisable
                  ? { backgroundColor: "gray", pointerEvents: "none" }
                  : { backgroundColor: "#9CB97B" }
              }
              className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-greenapp font-semibold text-xl text-white flex transition-all duration-500 hover:bg-green1 "
            >
              ชำระเงิน
            </a>
          </div>
        </div>
        <div className="bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
