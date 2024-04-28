import { useRouter } from "next/router";
import React, { useState } from "react";
const PaymentModal = ({ onClose, cartID }) => {
  const router = useRouter();
  const uid = typeof window !== 'undefined' ? localStorage.getItem("uid") : "";
  const access_token = typeof window !== 'undefined' ? localStorage.getItem("access_token") : "";  const submitPayment = async (uid, cartID, access_token) => {
    const API_URL = `http://192.168.1.5:8082/order`;
    const information = {
      uid: uid,
      cart_id: cartID,
      payment_type: 1,
      time: new Date(),
    };
    try {
      const result = await fetch(API_URL, {
        method: "POST",
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

  const handleSubmitPayment = async () => {
    try {
      const result = await submitPayment(uid, cartID, access_token);
      console.log(JSON.parse(result));
      router.push('/profile');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75 font-sukhumvit">
      <div className="bg-white p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">ยืนยันการชำระเงิน</h2>
        <p className="text-gray-800 mb-4">
          คุณแน่ใจหรือไม่ที่ต้องการที่จะชำระเงิน?
        </p>
        <div className="flex justify-end">
          <a
            className="bg-grey1 text-white px-4 py-2 rounded-md mr-4 cursor-pointer"
            onClick={onClose}
          >
            ยกเลิก
          </a>
          <a
            className="bg-greenapp text-white px-4 py-2 rounded-md"
            onClick={(event) => {
              event.preventDefault()
              onClose;
              handleSubmitPayment();
            }}
            // href="/"
          >
            ยืนยัน
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
