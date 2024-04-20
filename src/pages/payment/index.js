import PaymentModal from "../../../components/paymentModal";
import Navbar from "../../../components/navbar";
import React, { useState } from "react";

export default function Payment() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayment = () => {
    setIsModalOpen(true);
  };

  const products = [
    {
      id: 1,
      name: "เสื้อคอกลมผู้ชายผ้าถัก",
      image: "/shirt.jpeg",
      color: "สีฟ้าท๊อปดราย",
      size: "M",
      price: 220,
    },
    {
      id: 2,
      name: "เสื้อคอกลมผู้ชายผ้าถัก",
      image: "/shirt.jpeg",
      color: "สีฟ้าท๊อปดราย",
      size: "M",
      price: 220,
    },
    // เพิ่มสินค้าเพิ่มเติมตามต้องการ
  
  ];
  return (
    <div className="font-sukhumvit bg-white h-full">
      {isModalOpen && <PaymentModal onClose={() => setIsModalOpen(false)} />}
      <Navbar />
      <div className="bg-white">
        <div className="text-greenapp px-10 md:px-10 lg:px-15 xl:px-32 py-5 md:py-5 lg:py-10 xl:py-15 font-bold text-xxl md:text-xxl lg:text-xxxl xl:text-xxxl">
          คำสั่งซื้อ
        </div>
      </div>

      <div className="w-full bg-white  max-w-7xl px-4 md:px-5 lg-6 mx-auto my-2">
        <div class="rounded-xl p-6 max-lg:max-w-xl max-lg:mx-auto font-sukhumvit w-full bg-greenbg">
          <div class="flex items-center justify-between w-full pb-6 border-b-2 border-greenapp ">
            <p class="font-semibold text-xl md:text-xl lg:text-xl xl:text-xxl  leading-8 text-black">
              ที่อยู่สำหรับจัดส่งสินค้า
            </p>
          </div>
          <div class="flex items-center justify-between w-full">
            <p class="font-sukhumvit font-semibold text-l md:text-l lg:text-xl xl:text-xl leading-9 text-gray-900 mt-2 md:mt-2 lg:mt-3 xl:mt-4">
              วิศวะ ซอฟต์แวร์
            </p>
          </div>

          <div class="flex items-center justify-between w-full">
            <p class="font-sukhumvit font-semibold text-lg md:text-lg lg:text-l xl:text-l leading-9 text-gray-900 mt-1 md:mt-2 lg:mt-3 xl:mt-4">
              99 ถ. พหลโยธิน ตำบล คลองหนึ่ง อำเภอคลองหลวง ปทุมธานี 12120
            </p>
          </div>

          <div class="flex items-center justify-between w-full">
            <p class="font-sukhumvit font-semibold text-lg md:text-lg lg:text-l xl:text-l leading-9 text-gray-900 mt-1 md:mt-2 lg:mt-3 xl:mt-4">
              เบอร์ติดต่อ : 012 345 6789
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white  max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-greenbg p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
          >
            <div className="col-span-12 lg:col-span-2 img box">
              <img
                src={product.image}
                alt={product.name}
                className="max-lg:w-full lg:w-[180px] "
              />
            </div>
            <div className="col-span-12 lg:col-span-10 detail lg:pl-3">
              <div className="flex items-center justify-start mb-2">
                <h5 className="font-bold text-xl md:text-xl lg:text-xxl xl:text-xxl text-gray-900 mr-auto">
                  {product.name}
                </h5>
              </div>
              <div className="font-semi-bold text-l leading-7 text-gray-500 mb-6">
                {product.color}
              </div>
              <div className="font-bold text-black text-l leading-7 mb-6">
                ขนาด: {product.size}
              </div>
              <div className="flex justify-between items-center">
                <h6 className="text-black font-bold text-2xl leading-9 text-right">
                  {product.price} บาท
                </h6>
              </div>
            </div>
          </div>
        ))}

        <div className="p-6 max-lg:max-w-xl max-lg:mx-auto font-sukhumvit w-full py-6 border-y-2 border-greenapp ">
          <div class="flex items-center justify-between w-full py-3">
            <p class="font-manrope font-semibold text-2xl leading-9 text-gray-900">
              ตัวเลือกการจัดส่ง
            </p>
          </div>
          <div class="flex items-center justify-between w-ful">
            <p class="font-normal text-l leading-8 text-grey1">
              Standard Delivery - ส่งธรรมดาในประเทศ
            </p>
            <h6 class="font-semibold text-l leading-8 text-gray-900">0 บาท</h6>
          </div>
        </div>

        <div className="p-6 max-lg:max-w-xl max-lg:mx-auto font-sukhumvit w-full pb-6 border-b-2 border-greenapp mb-5 md:mb-5 lg:mb-3 xl:mb-5">
          <div class="flex items-center justify-between w-full py-3">
            <p class="font-manrope font-semibold text-2xl leading-9 text-gray-900">
              วิธีการชำระเงิน
            </p>
          </div>
          <div class="flex items-center justify-between w-ful">
            <p class="font-normal text-l leading-8 text-gray-400">
              ชำระเงินปลายทาง
            </p>
          </div>
        </div>
        <div className="px-6 pt-6 max-lg:max-w-xl max-lg:mx-auto font-sukhumvit w-full text-xl md:text-xl lg:text-xxl xl:text-xxl font-semibold">
          สรุปการชำระเงิน
        </div>
        <div class="rounded-xl p-6 max-lg:max-w-xl max-lg:mx-auto font-sukhumvit w-full bg-greenbg mt-4">
          <div class="flex items-center justify-between w-full mb-6 text-l md:text-l lg:text-xl xl:text-xl">
            <p class="font-normal leading-8 text-gray-400">รวม</p>
            <h6 class="font-semibold leading-8 text-gray-900">
              400 บาท
            </h6>
          </div>
          <div class="flex items-center justify-between w-full pb-6 border-b-2 border-greenapp text-l md:text-l lg:text-xl xl:text-xl">
            <p class="font-normal leading-8 text-gray-400">
              การจัดส่งสินค้า
            </p>
            <h6 class="font-semibold leading-8 text-gray-900">0 บาท</h6>
          </div>
          <div class="flex items-center justify-between w-full py-3 text-xl md:text-xl lg:text-xxl xl:text-xxl">
            <p class="font-semibold leading-9 text-gray-900">
              ยอดชำระทั้งหมด
            </p>
            <h6 class="font-semibold  leading-9 text-greenapp">
              400 บาท
            </h6>
          </div>
        </div>
        <div class="bg-white flex items-center flex-col sm:flex-row justify-end gap-3  py-10">
          <a
            onClick={handlePayment}
            class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-greenapp font-semibold text-xl text-white flex transition-all duration-500 hover:bg-green1"
          >
            ชำระเงิน
          </a>
        </div>
      </div>
    </div>
  );
}
