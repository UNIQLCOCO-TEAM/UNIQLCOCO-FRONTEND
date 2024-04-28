import { useRouter } from "next/router";
import Navbar from "../../../../../components/navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../../../../../components/footer";

export default function ProductDetail() {
  const router = useRouter();
  const productID = router.query.id;

  const [product, setProduct] = useState({});
  const [shirtsProduct, setShirtsProduct] = useState();
  const [inventory, setInventory] = useState("");
  const [selectProductSize, setSelectProductSize] = useState("");
  const [hasCart, setHasCart] = useState(false);
  const [cartID, setCartID] = useState(0);
  const [preventCart, setPreventCart] = useState([]);
  const [isSizeS, setIsSizeS] = useState(false);
  const [isSizeM, setIsSizeM] = useState(false);
  const [isSizeL, setIsSizeL] = useState(false);
  const [isSizeXL, setIsSizeXL] = useState(false);
  const [isSizeXXL, setIsSizeXXL] = useState(false);

  const uid = typeof window !== "undefined" ? localStorage.getItem("uid") : "";
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
  if (uid == null) router.push("/login");
  const handleUserHasCart = async (uid, access_token) => {
    const API_URL = `http://192.168.1.5:8081/cart/uid/${uid}`;
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

  const handleShirtProduct = async (id, access_token) => {
    const API_URL = `http://192.168.1.5:8081/product/${id}`;
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

  const handleUpdateCart = async (uid, productList, cartID, access_token) => {
    const API_URL = `http://192.168.1.5:8081/cart/${cartID}`;
    const information = {
      status: 0,
      products_id: productList,
      uid: uid,
    };
    try {
      const result = await fetch(API_URL, {
        method: "PATCH",
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

  const handleCreateCart = async (uid, productID, access_token) => {
    const API_URL = `http://192.168.1.5:8081/cart`;
    const information = {
      status: 0,
      products_id: [productID],
      uid: uid,
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

  const play = async () => {
    const audioCtx = new AudioContext();
    let buffer = null;
    const handleAudioProduct = async () => {
      const API_URL = `http://192.168.1.5:8081${product.sound}`;
      try {
        const result = await fetch(API_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        if (result.ok) {
          const arrayBuffer = await result.arrayBuffer();
          return arrayBuffer;
        } else {
          throw new Error(`Error: ${result.status} - ${result.statusText}`);
        }
      } catch (err) {
        throw err;
      }
    };
    const audioData = await handleAudioProduct();
    audioCtx.decodeAudioData(
      audioData,
      (decodedData) => {
        buffer = decodedData;
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start(0);
      },
      (error) => {
        console.error("Error decoding audio data:", error);
      }
    );
  };

  const handleAddProductToCart = async () => {
    const shirtProduct = Array.from(shirtsProduct).filter(
      (product) => product.size == selectProductSize
    )[0];
    if (!hasCart) {
      const result = await handleCreateCart(uid, shirtProduct.id, access_token);
      console.log(JSON.parse(result));
      router.replace("/carts");
    } else {
      const newCart = [];
      preventCart.forEach((product) => {
        newCart.push(product.id);
      });
      newCart.push(shirtProduct.id);

      const result = await handleUpdateCart(uid, newCart, cartID, access_token);
      console.log(JSON.parse(result));
      router.replace("/carts");
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
    const checkTokenIsExpired = async () => {
      const result = await handleTokenExpired(access_token);
      if (JSON.parse(result).result === true) {
        router.push("login");
        localStorage.clear();
      }
    };
    const fetchProduct = async () => {
      try {
        const result = await handleShirtProduct(productID, access_token);
        const shirts = JSON.parse(result).result;
        const shirt = JSON.parse(result).result[0];
        setProduct(shirt);
        setShirtsProduct(shirts);
      } catch (err) {
        console.error(err);
      }
    };
    const fetchForCheckUseHasCart = async () => {
      try {
        const result = await handleUserHasCart(uid, access_token);
        const hasCartResult = JSON.parse(result).result;
        setPreventCart(hasCartResult.carts);
        setCartID(hasCartResult.id);
        setHasCart(hasCartResult == null ? false : true);
      } catch (err) {
        console.error(err);
      }
    };
    checkTokenIsExpired();
    fetchProduct();
    fetchForCheckUseHasCart();
  }, [productID, access_token, uid, router]);

  const findProductSize = ({ size }) => {
    Array.from(shirtsProduct).forEach((shirt) => {
      if (shirt.size == size) {
        setInventory(shirt.inventory);
        setSelectProductSize(size);
      }
    });
    if (size == "S") {
      setIsSizeS(true);
      setIsSizeM(false);
      setIsSizeL(false);
      setIsSizeXL(false);
      setIsSizeXXL(false);
    } else if (size == "M") {
      setIsSizeS(false);
      setIsSizeM(true);
      setIsSizeL(false);
      setIsSizeXL(false);
      setIsSizeXXL(false);
    } else if (size == "L") {
      setIsSizeS(false);
      setIsSizeM(false);
      setIsSizeL(true);
      setIsSizeXL(false);
      setIsSizeXXL(false);
    } else if (size == "XL") {
      setIsSizeS(false);
      setIsSizeM(false);
      setIsSizeL(false);
      setIsSizeXL(true);
      setIsSizeXXL(false);
    } else if (size == "XXL") {
      setIsSizeS(false);
      setIsSizeM(false);
      setIsSizeL(false);
      setIsSizeXL(false);
      setIsSizeXXL(true);
    }
  };

  const imageLoader = ({ src }) => {
    return `http://192.168.1.5:8081${src}`;
  };

  return (
    <div className="w-screen bg-white h-screen">
      <div>
        <Navbar path={"pant"} />
      </div>
      <div className="w-screen py-8 font-sukhumvit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:w-1/2 px-4 mb-4 md:mb-0">
              <div className="h-auto rounded-lg mb-4">
                <Image
                  loader={imageLoader}
                  className="w-full h-full object-cover"
                  src={product.image_file}
                  alt={product.title}
                  width={30}
                  height={30}
                ></Image>
              </div>
            </div>
            <div className="md:w-1/2 px-4 mt-20 bg-white h-auto">
              <h2 className="text-xxl font-bold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-grey1 text-xl mb-4">{product.color}</p>

              <div className="flex flex-wrap items-center mt-5">
                <button onClick={play} className="mr-5 flex-shrink-0">
                  <Image
                    src="/volume.png"
                    alt="Speaker Icon"
                    className="w-8 h-8"
                    width={30}
                    height={30}
                  />
                </button>
                <p className="text-black text-l font-semibold flex-grow">
                  รายละเอียดสินค้า: {product.description}
                </p>
              </div>

              <div className="flex mt-8 mb-4">
                <div className="mr-4">
                  <span className="text-green1 font-bold text-xl md:text-2xl">
                    {parseInt(product.price).toLocaleString()} บาท
                  </span>
                </div>
                <div className="ml-10">
                  <span className="font-medium text-black text-xl ">
                    Availability:
                  </span>
                  <span className="ml-5 font-bold text-greenapp text-xl">
                    {inventory == "" ? product.inventory : inventory} In Stock
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  <button
                    style={
                      isSizeS
                        ? { backgroundColor: "#9CB97B", color: "white" }
                        : {}
                    }
                    className="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white"
                    onClick={() => findProductSize({ size: "S" })}
                  >
                    S
                  </button>
                  <button
                    style={
                      isSizeM
                        ? { backgroundColor: "#9CB97B", color: "white" }
                        : {}
                    }
                    className="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white"
                    onClick={() => findProductSize({ size: "M" })}
                  >
                    M
                  </button>
                  <button
                    style={
                      isSizeL
                        ? { backgroundColor: "#9CB97B", color: "white" }
                        : {}
                    }
                    className="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white"
                    onClick={() => findProductSize({ size: "L" })}
                  >
                    L
                  </button>
                  <button
                    style={
                      isSizeXL
                        ? { backgroundColor: "#9CB97B", color: "white" }
                        : {}
                    }
                    className="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white"
                    onClick={() => findProductSize({ size: "XL" })}
                  >
                    XL
                  </button>
                  <button
                    style={
                      isSizeXXL
                        ? { backgroundColor: "#9CB97B", color: "white" }
                        : {}
                    }
                    className="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white"
                    onClick={() => findProductSize({ size: "XXL" })}
                  >
                    XXL
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full  px-2 mb-2 sm:mb-0">
                  <button
                    className="w-full bg-green1 text-white py-3 px-4 rounded-full font-bold hover:bg-grey1 text-xl"
                    onClick={() => {
                      if (uid == null) router.push("/login");
                      else handleAddProductToCart();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full mt-2">
        <Footer />
      </div>
    </div>
  );
}
