import Navbar from "../../../components/navbar";

export default function Carts() {
  const products = [
    {
      id: 1,
      name: "เสื้อคอกลมผู้ชายผ้าถัก",
      image: "/shirt.jpeg",
      color: "สีฟ้าท๊อปดราย",
      size: "M",
      price: 220,
    },
    {
      id: 2,
      name: "เสื้อคอกลมผู้ชายผ้าถัก",
      image: "/shirt.jpeg",
      color: "สีฟ้าท๊อปดราย",
      size: "M",
      price: 220,
    },
    // เพิ่มสินค้าเพิ่มเติมตามต้องการ
  ];

  const removeFromCart = (productId) => {
    console.log("Removing product with ID:", productId);
    // ใส่โค้ดเพื่อลบสินค้าออกจากตะกร้าตาม ID ที่รับมา
  };

  return (
    <div className="font-sukhumvit bg-white h-screen">
      <Navbar />
      <div className="bg-white">
        <div className="text-greenapp px-10 md:px-10 lg:px-15 xl:px-48 py-5 md:py-5 lg:py-10 xl:py-15 font-bold text-xxl md:text-xxl lg:text-xxxl xl:text-xxxl">
          YOUR
          <span className="ml-3 text-black font-bold text-xxl md:text-xxl lg:text-xxxl xl:text-xxxl">
            CARTS
          </span>
        </div>
      </div>

      <div className="h-screen bg-white font-sukhumvit">
        <div className="py-2 relative">
          <div className="w-full bg-white  max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border-2 border-gray-200 bg-greenbg p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
              >
                <div className="col-span-12 lg:col-span-2 img box">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-lg:w-full lg:w-[180px] "
                  />
                </div>
                <div className="col-span-12 lg:col-span-10 detail lg:pl-3">
                  <div className="flex items-center justify-start mb-2">
                    <h5 className="font-bold text-xxl text-gray-900 mr-auto">
                      {product.name}
                    </h5>
                    <div class="flex items-center justift-end mt-4 mb-4">
                      <button className="rounded-full group flex items-center justify-end focus-within:outline-red-500 ml-auto">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                            cx="17"
                            cy="17"
                            r="17"
                            fill=""
                          />
                          <path
                            class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                            d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                            stroke="#EF4444"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="font-semi-bold text-l leading-7 text-gray-500 mb-6">
                    {product.color}
                  </div>
                  <div className="font-bold text-black text-l leading-7 mb-6">
                    ขนาด: {product.size}
                  </div>
                  <div className="flex justify-between items-center">
                    {/* Your quantity buttons and input here */}
                    <h6 className="text-black font-bold text-2xl leading-9 text-right">
                      {product.price} บาท
                    </h6>
                  </div>
                </div>
              </div>
            ))}
            
            <div class="rounded-xl p-6 max-lg:max-w-xl max-lg:mx-auto font-sukhumvit w-full bg-white">
                <div class="flex items-center justify-between w-full mb-6">
                    <p class="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">$360.00</h6>
                </div>
                <div class="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p class="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
                </div>
                <div class="flex items-center justify-between w-full py-3">
                    <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 class="font-manrope font-medium text-2xl leading-9 text-indigo-500">$405.00</h6>
                </div>
            </div>
          </div>
       

          
        </div>
      </div>
    </div>
  );
}