export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-greenapp shadow md:flex md:items-center md:justify-between md:p-6 font-sukhumvit">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                className="h-12 w-auto"
                src="/LOGO2.png"
                alt="Your Company"
              />
              <img
                className="h-12 w-auto ml-3"
                src="/LOGO1.png"
                alt="Your Company"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="border-r-2 border-greenapp pr-5">
              <h2 className="mb-4 text-lg md:text-lg lg:text-lg xl:text-xl font-bold text-green1">
                DEVELOPER #01
              </h2>
              <ul className="text-black text-base md:text-base lg:text-lg xl:text-lg">
                <li className="mb-2 font-semibold">Sittipak Srisawas</li>
                <li>6410742032</li>
              </ul>
            </div>
            <div className="border-r-2 border-greenapp pr-5">
              <h2 className="mb-4 text-lg md:text-lg lg:text-lg xl:text-xl font-bold text-green1">
                DEVELOPER #02
              </h2>
              <ul className="text-black text-base md:text-base lg:text-lg xl:text-lg">
                <li className="mb-2 font-semibold">
                 
                    Narathip Jaroensuk
      
                </li>
                <li className="">
                
                    6410742412
       
                </li>
              </ul>
            </div>
            <div className="border-r-2 border-greenapp pr-5">
              <h2 className="mb-4 text-lg md:text-lg lg:text-lg xl:text-xl font-bold text-green1">
                DEVELOPER #03
              </h2>
              <ul className="text-black text-base md:text-base lg:text-lg xl:text-lg">
                <li className="mb-2 font-semibold">Wasawat Cheepsamut</li>
                <li>6410742735</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-greenapp border-1 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-base text-gray-500 sm:text-center ">
            © 2024{" "} THIS PROJECT IS A PART OF CN334 WEB APPLICATION DEVELOPMENT
           
            
          </span>
        </div>
      </div>
    </footer>
  );
}
