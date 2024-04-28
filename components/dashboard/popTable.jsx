import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";
import { popColumns, popProducts } from "../../src/libs/productData";

const PopTable = () => {
  /** Rendering logic **/
  const renderCell = useCallback((product, columnKey) => {
    const cellValue = product[columnKey];
    switch (columnKey) {
      case "picture":
        return (
          <User
            avatarProps={{
              radius: "full",
              src: `http://192.168.1.5:8081${product.image_file}`,
              size: "sm",
            }}
            name={cellValue}
          />
        );
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-bold capitalize">{product.title}</p>
          </div>
        );
      case "inventory":
        return (
          <div className="flex gap-5">
            <div className="flex flex-col">
              <p className="font-medium capitalize">S</p>
              <p className="capitalize text-default-400">{cellValue.S}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">M</p>
              <p className="capitalize text-default-400">{cellValue.M}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">L</p>
              <p className="capitalize text-default-400">{cellValue.L}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">XL</p>
              <p className="capitalize text-default-400">{cellValue.XL}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize">XXL</p>
              <p className="capitalize text-default-400">{cellValue.XXL}</p>
            </div>
          </div>
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-bold capitalize">{product.price}</p>
          </div>
        );
      case "income":
        return (
          <div className="flex gap-5">
            <div className="flex flex-col">
              <p className="text-bold capitalize">{product.todayOrders}</p>
            </div>
          </div>
        );
      case "total":
        return (
          <div className="flex gap-5">
            <div className="flex flex-col">
              <p className="text-bold capitalize">{product.totalOrders}</p>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const [products, setProducts] = useState([]);
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : "";
  const handleProductList = async (access_token) => {
    const API_URL = `http://192.168.1.5:8082/order/topSellerForDashboard`;
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
    if (!role) router.push("/login");
    const fetchProductList = async () => {
      try {
        const result = await handleProductList(access_token);
        setProducts(JSON.parse(result).result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductList();
  }, [access_token, role]);

  return (
    <div>
      <Table
        aria-label="Example static collection table"
        className="@apply rounded-lg bg-gray-100"
      >
        <TableHeader columns={popColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={products}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PopTable;
