import React, { useState } from "react";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white font-sukhumvit">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div className="flex items-center">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`hidden h-6 w-6 ${
                    isMobileMenuOpen ? "block" : "hidden"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start flex-grow">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-12 w-auto"
                src="/LOGO2.png"
                alt="Your Company"
              ></img>
              <img
                className="h-12 w-auto ml-3"
                src="/LOGO1.png"
                alt="Your Company"
              ></img>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex mr-0">
                <a
                  href="#"
                  className="m-2 text-green1 rounded-md px-3 py-2 font-bold text-xl "
                  aria-current="page"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="m-2 text-black-300 hover:bg-green1 hover:text-white rounded-md px-3 py-2 font-medium text-xl"
                >
                  SHIRTS
                </a>
                <a
                  href="#"
                  className="m-2 text-black-300 hover:bg-green1 hover:text-white rounded-md px-3 py-2 font-medium text-xl"
                >
                  PANTS
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-white-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-greenapp"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <img className="h-7" src="/cart.png"></img>
            </button>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-white-800 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-greenapp"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img className="h-7" src="/user.png"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col items-center`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 w-full">
          <a
            href="#"
            className="block w-full text-greenapp rounded-md px-3 py-2 font-bold text-xl"
            aria-current="page"
          >
            HOME
          </a>
          <a
            href="#"
            className="block w-full text-black-300 hover:bg-greenapp hover:text-white rounded-md px-3 py-2 font-medium text-xl"
          >
            SHIRTS
          </a>
          <a
            href="#"
            className="block w-full text-black-300 hover:bg-greenapp hover:text-white rounded-md px-3 py-2 font-medium text-xl"
          >
            PANTS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
