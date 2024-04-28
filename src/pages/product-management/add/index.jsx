import React, { useEffect } from "react";
import Navbar from "../../../../components/dashboard/navbar";
import AddForm from "../../../../components/product-management/addForm";
import { useRouter } from "next/router";

const AddProducts = () => {
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
        <h1 className="text-xxl font-bold text-green1">ADD PRODUCT</h1>
        <AddForm />
      </div>
    </div>
  );
};

export default AddProducts;
