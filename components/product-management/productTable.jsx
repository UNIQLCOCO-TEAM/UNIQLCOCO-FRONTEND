import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  User,
  Tooltip,
} from "@nextui-org/react";
import { FaPen, FaTrash } from "react-icons/fa6";
import Link from "next/link";
import { columns } from "../../src/libs/productData";
import { useRouter } from "next/router";

const ProductTable = () => {
  /** Rendering logic **/
  const renderCell = useCallback(
    (product, columnKey) => {
      const access_token =
        typeof window !== "undefined"
          ? localStorage.getItem("access_token")
          : "";
      const onRemoveClick = async (id) => {
        try {
          const result = await handleRemoveProduct(id, access_token);
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      };
      const cellValue = product[columnKey];
      switch (columnKey) {
        case "picture":
          return (
            <User
              avatarProps={{
                radius: "full",
                src: `http://192.168.1.5:8081${product.path}`,
                size: "sm",
              }}
              name={cellValue}
            />
          );
        case "name":
          return (
            <div className="flex flex-col">
              <p className="text-bold capitalize">{cellValue}</p>
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
              <p className="text-bold capitalize">{cellValue}</p>
            </div>
          );
        case "action":
          return (
            <div className="relative flex items-center gap-3">
              <Tooltip content="Edit product">
                <Link
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  href={{
                    pathname: "product-management/edit/[id]",
                    query: {
                      id: product.id,
                    },
                  }}
                >
                  <FaPen />
                </Link>
              </Tooltip>
              <Tooltip color="danger" content="Delete product">
                <button
                  onClick={() => onRemoveClick(product.id)}
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                >
                  <FaTrash />
                </button>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const router = useRouter();
  const [products, setProducts] = useState([]);
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : "";
  const handleProductList = async (access_token) => {
    const API_URL = `http://192.168.1.5:8081/product/nonDuplicate`;
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

  const handleRemoveProduct = async (id, access_token) => {
    const API_URL = `http://192.168.1.5:8081/product/deleteSetOfProduct/${id}`;
    try {
      const result = await fetch(API_URL, {
        method: "DELETE",
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
  }, [access_token, role, router]);

  return (
    <div>
      <Table
        aria-label="Example static collection table"
        className="@apply rounded-lg bg-gray-100"
      >
        <TableHeader columns={columns}>
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

export default ProductTable;
