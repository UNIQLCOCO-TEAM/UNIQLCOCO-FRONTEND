import React from "react";
import Navbar from "../../../components/navbar";

export default function Profile() {
  // Dummy user data
  const userData = {
    firstName: "วิศวะ",
    lastName: "ซอฟต์แวร์",
    address: "99 ถ. พหลโยธิน ตำบล คลองหนึ่ง อำเภอคลองหลวง ปทุมธานี 12120",
    phoneNumber: "012-345-6789",
  };

  // Dummy order data
  const orders = [
    {
      id: "0000001",
      date: "20/04/2024",
      price: 400,
    },
    {
      id: "0000002",
      date: "21/04/2024",
      price: 600,
    },
    
  ];

  return (
    <div className="font-sukhumvit bg-white h-screen">
      <Navbar />
      <div className="bg-white">
        <div className="text-greenapp px-10 md:px-10 lg:px-15 xl:px-32 py-5 md:py-5 lg:py-10 xl:py-15 font-bold text-xxl md:text-xxl lg:text-xxxl xl:text-xxxl">
          PROFILE
        </div>
      </div>


      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto my-2 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img src="/profile.png" className="w-32" alt="Profile"></img>
        </div>
        <div className="max-w-xl mx-auto p-5 text-center">
          <div className="mb-4">
            <h3 className="text-xxl font-semibold text-greenapp">
              {userData.firstName} {userData.lastName}
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-l font-semibold text-gray-800">
              ที่อยู่: {userData.address}
            </h3>
          </div>
          <div>
            <h3 className="text-l font-semibold text-gray-800 mb-12">
              เบอร์ติดต่อ: {userData.phoneNumber}
            </h3>
          </div>
        </div>
      </div>

      <div className="text-greenapp px-10 md:px-10 lg:px-15 xl:px-32 py-5 md:py-5 lg:py-15 xl:py-5 font-bold text-xl md:text-xl lg:text-xxl xl:text-xxl">
        ประวัติการสั่งซื้อสินค้า
      </div>

      <div className="bg-white font-sukhumvit relative overflow-x-auto px-10 md:px-10 lg:px-15 xl:px-32 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-l md:text-l lg:text-xl xl:text-xl text-white uppercase bg-greenapp">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                วันเดือนปีที่ซื้อ
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-white dark:bg-gray-800 text-l md:text-l lg:text-xl xl:text-xl"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.id}
                </th>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
