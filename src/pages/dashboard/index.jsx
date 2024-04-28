import React, { useState, useEffect } from "react";
import Navbar from "../../../components/dashboard/navbar";
import Barchart from "../../../components/dashboard/barchart";
import PopTable from "../../../components/dashboard/popTable";
import { FaUser, FaReceipt } from "react-icons/fa6";
import { useRouter } from "next/router";
import ProgressBar from "../../../components/dashboard/progressBar";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const router = useRouter();
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : "";

  const handleGetAllUser = async (access_token) => {
    const API_URL = `http://192.168.1.5:8080/auth`;
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

  const handleGetAllOrder = async (access_token) => {
    const API_URL = `http://192.168.1.5:8082/order`;
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

  useEffect(() => {
    if (!role || role != 'admin') {
      router.push("/login");
      localStorage.clear();
    }
    const checkTokenIsExpired = async () => {
      const result = await handleTokenExpired(access_token);
      if (JSON.parse(result).result === true) {
        router.push("login");
        localStorage.clear();
      }
    };
    const fetchAllUser = async () => {
      try {
        const result = await handleGetAllUser(access_token);
        setTotalUsers(JSON.parse(result).result.length);
      } catch (err) {
        console.error(err);
      }
    };
    const fetchAllOrder = async () => {
      try {
        const result = await handleGetAllOrder(access_token);
        setTotalOrders(JSON.parse(result).result.length);
      } catch (err) {
        console.error(err);
      }
    };
    checkTokenIsExpired();
    fetchAllUser();
    fetchAllOrder();
  }, [role, router, access_token]);

  return (
    <div className="flex-1 min-h-screen bg-greenbg">
      <Navbar currentPath={router.pathname} />
      <div className="flex flex-col p-8 gap-8">
        <div>
          <h1 className="text-xxl font-bold text-green1">DASHBOARD</h1>
        </div>
        <div className="grid xl:grid-rows-3 xl:grid-flow-col gap-5">
          <div className="xl:row-span-2 xl:col-span-2 bg-white px-8 pt-8 pb-5 rounded-lg">
            <h2 className="text-greenapp text-2xl font-semibold ">
              Total Revenue
            </h2>
            <div className="xl:h-full xl:flex xl:items-center">
              <Barchart />
            </div>
          </div>
          <div className="xl:col-span-2 bg-white p-5 rounded-lg">
            <div>
              <h2 className="text-xl font-medium mb-6">Top Seller</h2>
            </div>
            <PopTable />
          </div>
          <div className="xl:col-span-2 flex flex-col gap-5 bg-[#90DEFF] p-5 rounded-lg">
            <div>
              <h2 className="text-white text-2xl font-semibold">Total Users</h2>
            </div>
            <div className="flex justify-center h-full w-full">
              <div className="flex gap-2 items-center">
                <div className="bg-[#5CCEFE] rounded-full w-fit p-3">
                  <FaUser className="text-white text-7xl" />
                </div>
                <h2 className="text-white text-4xl font-light">
                  {parseInt(totalUsers).toLocaleString()} users
                </h2>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 flex flex-col gap-5 bg-[#FF9E45] p-5 rounded-lg">
            <h2 className="text-white text-2xl font-semibold">Total Orders</h2>
            <div className="flex justify-center h-full w-full">
              <div className="flex gap-2 items-center">
                <div className="bg-[#FF8718] rounded-full w-fit p-3">
                  <FaReceipt className="text-white text-7xl" />
                </div>
                <h2 className="text-white text-4xl font-light">
                  {parseInt(totalOrders).toLocaleString()} orders
                </h2>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 bg-white p-5 rounded-lg">
            <h2 className="text-2xl font-semibold">Status Overview</h2>
            <div className="col-span-1">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
