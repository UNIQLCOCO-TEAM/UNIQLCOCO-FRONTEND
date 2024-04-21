import React, { useState } from "react";
const PaymentModal = ({ onClose }) => {
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
            onClick={onClose}
            href="/home"
          >
            ยืนยัน
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
