import React, { useState, useEffect, useRef } from "react";
import { FaCirclePlus, FaTrash, FaFloppyDisk, FaXmark } from "react-icons/fa6";
import { withRouter, useRouter } from "next/router";
import Image from "next/image";

const AddForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [type, setType] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("S");
  const [inventory, setInventory] = useState({
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "",
  });
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileSelected, setFileSelected] = useState(null);

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
    if (!role) router.push("/login");
    const checkTokenIsExpired = async () => {
      const result = await handleTokenExpired(access_token);
      if (JSON.parse(result).result === true) {
        router.push("login");
        localStorage.clear();
      }
    };
    checkTokenIsExpired();
  }, [access_token, role, router]);

  const imageLoader = ({ src }) => {
    return `http://192.168.1.5:8081${src}`;
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteClick = () => {
    localStorage.removeItem("selectedImage");
    setSelectedImage(null);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileSelected(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        localStorage.setItem("selectedImage", imageData);
        setSelectedImage(imageData);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAddProduct = async (access_token, formData) => {
    const API_URL = `http://192.168.1.5:8081/product/createSetOfProduct`;
    try {
      const result = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: formData,
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("size", size);
    formData.append("type", type);
    formData.append("inventory_s", inventory.S);
    formData.append("inventory_m", inventory.M);
    formData.append("inventory_l", inventory.L);
    formData.append("inventory_xl", inventory.XL);
    formData.append("inventory_xxl", inventory.XXL);
    formData.append("file", fileSelected);

    try {
      if (fileSelected) {
        const result = await handleAddProduct(access_token, formData);
        console.log(result);
      }
      router.push("/product-management");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="grid xl:flex xl:justify-center col-span-1 gap-12">
      <div className="xl:col-start-2 flex flex-col sm:items-center gap-5">
        <div className="flex justify-center w-auto sm:w-72 rounded-lg border-1">
          <Image
            loader={imageLoader}
            src={selectedImage || path} // Use selectedImage if available, else use thisData.path
            alt="a picture of product"
            width={720}
            height={720}
            className="h-auto w-full"
          />
        </div>
        <div className="flex gap-3 justify-between sm:w-72 xl:w-full">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button
            className="flex items-center gap-2 px-5 py-2 bg-greenapp rounded-lg
                    hover:bg-green-900 font-semibold
                    text-white"
            onClick={handleButtonClick}
          >
            <FaCirclePlus className="text-white" />
            Add Picture
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2 bg-[#ff4234da] rounded-lg
                    hover:bg-red-900 font-semibold
                    text-white"
            onClick={handleDeleteClick}
          >
            <FaTrash className="text-white" />
            Delete
          </button>
        </div>
      </div>
      <div className="xl:col-start-3 col-span-1">
        <form
          // ref={formRef}
          className="bg-white p-8 rounded-lg grid md:grid-cols-4 
                    md:gap-y-8 gap-x-2 gap-y-5
                    xl:w-[50rem]"
          onSubmit={handleSubmit}
        >
          <div className="md:col-span-1 flex items-center">
            <label
              htmlFor="productName"
              className="text-[#202020] font-semibold"
            >
              Name
            </label>
          </div>
          <input
            className="md:col-span-3 p-2 border border-greenapp rounded-lg
                                focus:outline-none focus:border-green1 "
            id="productName"
            name="name"
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="md:col-span-1 flex items-center">
            <label htmlFor="price" className="text-[#202020] font-semibold">
              Price
            </label>
          </div>
          <input
            className="md:col-span-2 p-2 border border-greenapp rounded-lg
                                focus:outline-none focus:border-green1 "
            id="price"
            name="price"
            type="text"
            placeholder="฿฿฿"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <div className="md:col-span-1 md:flex hidden items-center">
            <span className="text-[#202020] font-semibold">THB</span>
          </div>
          <div className="md:col-span-1 flex items-start">
            <label
              htmlFor="description"
              className="text-[#202020] font-semibold"
            >
              Description
            </label>
          </div>
          <textarea
            className="py-2 px-2 md:col-span-3 border border-greenapp rounded-lg
                                focus:outline-none focus:border-green1 sm:resize-none"
            rows={4}
            id="description"
            name="description"
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="md:col-span-1 flex items-center">
            <label htmlFor="type" className="text-[#202020] font-semibold">
              Type
            </label>
          </div>
          <div className="md:col-span-3">
            <select
              className="px-5 py-2 border border-grey1 rounded-lg bg-lightgrey"
              name="type"
              id="type"
              value={type == 1 ? "shirt" : "pants"}
              onChange={(e) => setType(e.target.value == "shirt" ? 1 : 2)}
            >
              <option value="shirt">Shirt</option>
              <option value="pants">Pants</option>
            </select>
          </div>
          <div className="md:col-span-1 flex items-center">
            <label htmlFor="color" className="text-[#202020] font-semibold">
              Color
            </label>
          </div>
          <input
            className="md:col-span-3 border-1 py-2 px-2 border-greenapp rounded-lg
                focus:outline-none focus:border-green1 bg-white w-32"
            id="color"
            name="color"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div className="md:col-span-1 flex items-center">
            <label
              htmlFor="inventory-s"
              className="text-[#202020] font-semibold"
            >
              Inventory
            </label>
          </div>
          <div className="md:col-span-3 grid md:grid-cols-3 items-center gap-4">
            <div className="mr-5">
              <span className="text-[#202020]">S</span>
            </div>
            <input
              className="py-2 px-2 border border-greenapp rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2"
              id="inventory-s"
              name="s"
              type="text"
              value={inventory.S}
              onChange={(e) => {
                const newValue = e.target.value.trim();
                let parsedValue = newValue;

                const parsedInt = parseInt(newValue);
                if (!isNaN(parsedInt)) {
                  parsedValue = parsedInt;
                }

                if (!isNaN(parsedValue) && parsedValue >= 0) {
                  setInventory({
                    ...inventory,
                    S: parsedValue,
                  });
                }
              }}
            />
          </div>
          <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
            <div>
              <span className="text-[#202020]">M</span>
            </div>
            <input
              className="py-2 px-2 border border-greenapp rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 "
              id="inventory-m"
              name="m"
              type="text"
              value={inventory.M}
              onChange={(e) => {
                const newValue = e.target.value.trim();
                let parsedValue = newValue;

                const parsedInt = parseInt(newValue);
                if (!isNaN(parsedInt)) {
                  parsedValue = parsedInt;
                }

                if (!isNaN(parsedValue) && parsedValue >= 0) {
                  setInventory({
                    ...inventory,
                    M: parsedValue,
                  });
                }
              }}
            />
          </div>
          <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
            <div>
              <span className="text-[#202020]">L</span>
            </div>
            <input
              className="py-2 px-2 border border-greenapp rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2"
              id="inventory-l"
              name="l"
              type="text"
              value={inventory.L}
              onChange={(e) => {
                const newValue = e.target.value.trim();
                let parsedValue = newValue;

                const parsedInt = parseInt(newValue);
                if (!isNaN(parsedInt)) {
                  parsedValue = parsedInt;
                }

                if (!isNaN(parsedValue) && parsedValue >= 0) {
                  setInventory({
                    ...inventory,
                    L: parsedValue,
                  });
                }
              }}
            />
          </div>
          <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
            <div>
              <span className="text-[#202020]">XL</span>
            </div>
            <input
              className="py-2 px-2 border border-greenapp rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 "
              id="inventory-xl"
              name="xl"
              type="text"
              value={inventory.XL}
              onChange={(e) => {
                const newValue = e.target.value.trim();
                let parsedValue = newValue;

                const parsedInt = parseInt(newValue);
                if (!isNaN(parsedInt)) {
                  parsedValue = parsedInt;
                }

                if (!isNaN(parsedValue) && parsedValue >= 0) {
                  setInventory({
                    ...inventory,
                    XL: parsedValue,
                  });
                }
              }}
            />
          </div>
          <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
            <div>
              <span className="text-[#202020]">XXL</span>
            </div>
            <input
              className="py-2 px-2 border border-greenapp rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 "
              id="inventory-xxl"
              name="xxl"
              type="text"
              value={inventory.XXL}
              onChange={(e) => {
                const newValue = e.target.value.trim();
                let parsedValue = newValue;

                const parsedInt = parseInt(newValue);
                if (!isNaN(parsedInt)) {
                  parsedValue = parsedInt;
                }

                if (!isNaN(parsedValue) && parsedValue >= 0) {
                  setInventory({
                    ...inventory,
                    XXL: parsedValue,
                  });
                }
              }}
            />
          </div>
          <div className="md:col-span-4 flex gap-3 justify-end">
            <button
              className="flex items-center gap-2 px-5 py-2 bg-[#9CB97B] rounded-lg
                        hover:bg-green-900 font-semibold
                        text-white"
              type="submit"
            >
              <FaFloppyDisk className="text-white" />
              Save
            </button>
            <button
              className="flex items-center gap-2 px-5 py-2 bg-lightgrey rounded-lg
                        hover:bg-red-900 hover:text-lightgrey font-semibold"
              onClick={() => {
                router.push("/product-management");
              }}
            >
              <FaXmark className="text-grey1 hover:text-lightgrey" />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
