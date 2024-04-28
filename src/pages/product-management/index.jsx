import React, { useEffect } from "react";
import Navbar from "../../../components/dashboard/navbar";
import ProductTable from "../../../components/product-management/productTable";
import { FaCirclePlus } from "react-icons/fa6";
import { useRouter } from "next/router";

const ProductManagement = () => {
  const router = useRouter();
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : "";

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
    checkTokenIsExpired();
  }, [access_token, role, router]);
  return (
    <div className="flex-1 min-h-screen bg-greenbg">
      <Navbar currentPath={router.pathname} />
      <div className="flex flex-col p-8 gap-8">
        <div>
          <h1 className="text-xxl font-bold text-green1">PRODUCT MANAGEMENT</h1>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-start-2 flex justify-end">
            <button
              className="flex items-center gap-2 px-8 py-2 bg-[#9CB97B] rounded-lg
                    hover:bg-green-900 en font-semibold
                    text-white"
              onClick={() =>
                router.push({
                  pathname: "/product-management/add",
                })
              }
            >
              <FaCirclePlus className="text-white" />
              Add Product
            </button>
          </div>
          <div className="lg:col-span-2 bg-white p-5 rounded-lg">
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
