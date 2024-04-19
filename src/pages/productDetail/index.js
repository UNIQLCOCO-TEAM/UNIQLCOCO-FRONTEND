import Navbar from "../../../components/navbar";

export default function ProductDetail() {
  return (
    <div className="w-screen bg-white h-screen">
      <div>
        <Navbar />
      </div>
      <div class="w-screen py-8 font-sukhumvit">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:w-1/2 px-4 mb-4 md:mb-0">
              <div class="h-auto rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src="/shirt.jpeg"
                  alt="Product Image"
                ></img>
              </div>
            </div>
            <div class="md:w-1/2 px-4 mt-20 bg-white h-auto">
              <h2 class="text-xxl font-bold text-gray-800 dark:text-white mb-2">
                เสื้อคอกลมผู้ชายผ้าถัก
              </h2>
              <p class="text-grey1 text-xl mb-4">สีฟ้าท๊อปดราย</p>

              <div className="flex flex-wrap items-center mt-5">
                <button onClick={''} className="mr-5 flex-shrink-0">
                  <img
                    src="/volume.png"
                    alt="Speaker Icon"
                    className="w-8 h-8"
                  />
                </button>
                <p className="text-black text-l font-semibold flex-grow">
                  รายละเอียดสินค้า: ทรงเข้ารูป ปลายขาเรียว, ซักนุ่ม, ยืดได้ 2
                  ทิศทาง และน้ำหนักเบา สวมใส่สบาย
                </p>
              </div>

              <div class="flex mt-8 mb-4">
                <div class="mr-4">
                  <span class="text-green1 font-bold text-xl md:text-2xl">
                    200 บาท
                  </span>
                </div>
                <div className="ml-10">
                  <span class="font-medium text-black text-xl ">
                    Availability:
                  </span>
                  <span class="ml-5 font-bold text-greenapp text-xl">
                    In Stock
                  </span>
                </div>
              </div>

              <div class="mb-4">
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>
                <div class="flex items-center mt-2">
                  <button class="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white ">
                    S
                  </button>
                  <button class="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white">
                    M
                  </button>
                  <button class="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white">
                    L
                  </button>
                  <button class="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white">
                    XL
                  </button>
                  <button class="bg-gray-200  text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-greenapp hover:text-white">
                    XXL
                  </button>
                </div>
              </div>
              <div class="flex flex-wrap -mx-2 mb-4">
                <div class="w-full  px-2 mb-2 sm:mb-0">
                  <button class="w-full bg-green1 text-white py-3 px-4 rounded-full font-bold hover:bg-grey1 text-xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}