import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  const [userProfile, setUserProfile] = useState({
    name: "",
    surname: "",
    address: "",
    phone_number: "",
  });

  const uid = typeof window !== "undefined" ? localStorage.getItem("uid") : "";
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
  if (uid == null) router.push("/login");

  const handleTokenExpired = async (access_token) => {
    const API_URL = `http://192.168.1.5:8080/auth/isExpired/${access_token}`;
    try {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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

  const handleUserProfile = async (id, access_token) => {
    const API_URL = `http://192.168.1.5:8080/user/id/${id}`;
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

  const handleOrderList = async (uid, access_token) => {
    const API_URL = `http://192.168.1.5:8082/order/uid/${uid}`;
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

  const formatOrderId = (orderID) => {
    let orderIdString = orderID.toString();
    const zerosNeeded = 6 - orderIdString.length;
    const paddedOrderId = "0".repeat(zerosNeeded) + orderIdString;

    return paddedOrderId;
  };

  const convertTimeStamp = (timestamp) => {
    const time = new Date(timestamp);
    const date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
    const month =
      time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth();
    const year = time.getFullYear();
    return `${date}/${month}/${year}`;
  };

  const convertPhoneNumberFormat = (phone) => {
    const firstDigit = `${phone}`.slice(0, 3);
    const twoDigit = `${phone}`.slice(3, 6);
    const threeDigit = `${phone}`.slice(6);
    return `${firstDigit}-${twoDigit}-${threeDigit}`;
  };

  useEffect(() => {
    const checkTokenIsExpired = async () => {
      const result = await handleTokenExpired(access_token);
      if (JSON.parse(result).result === true) {
        router.push("login");
        localStorage.clear();
      }
    };
    const fetchUserProfile = async () => {
      const result = await handleUserProfile(uid, access_token);
      const fetchUserData = JSON.parse(result).result;
      setUserProfile(fetchUserData);
    };
    const fetchOrderList = async () => {
      const result = await handleOrderList(uid, access_token);
      const fetchOrderListData = JSON.parse(result);
      setOrders(fetchOrderListData.result);
    };
    checkTokenIsExpired();
    if (uid != null) {
      fetchUserProfile();
      fetchOrderList();
    }
  }, [access_token, router, uid]);

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
          <Image
            src="/profile.png"
            className="w-32"
            alt="Profile"
            width={48}
            height={48}
          ></Image>
        </div>
        <div className="max-w-xl mx-auto p-5 text-center">
          <div className="mb-4">
            <h3 className="text-xxl font-semibold text-greenapp">
              {userProfile.name} {userProfile.surname}
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-l font-semibold text-gray-800">
              ที่อยู่: {userProfile.address}
            </h3>
          </div>
          <div>
            <h3 className="text-l font-semibold text-gray-800 mb-12">
              เบอร์ติดต่อ: {convertPhoneNumberFormat(userProfile.phone_number)}
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
                key={formatOrderId(parseInt(order.order_id))}
                className="bg-white  text-l md:text-l lg:text-xl xl:text-xl"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  {formatOrderId(parseInt(order.order_id))}
                </th>
                <td className="px-6 py-4">{convertTimeStamp(order.time)}</td>
                <td className="px-6 py-4">
                  {parseInt(order.total_price + order.fees).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bottom-0 w-full mt-2">
        <Footer />
      </div>
    </div>
  );
}
