import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" height={50} width={110} />
          <span className="text-white font-bold text-lg ml-4">scripted</span>
        </div>
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="md:hidden text-white cursor-pointer">
          <svg
            className="w-6 h-6 menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            className="w-6 h-6 close-icon hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
        <div className="hidden md:flex space-x-4">
          <a
            href="/"
            className="text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Home
          </a>
          <a
            href="/Artist"
            className="text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Artist
          </a>
          <a
            href="/Music"
            className="text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Music
          </a>
          <a
            href="/Marketplace"
            className="text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            NFT Marketplace
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            News & Updates
          </a>
          <a
            href="/Community"
            className="text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Community
          </a>
          <a
            href="/FAQ"
            className="text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            FAQs
          </a>
        </div>
        <div className="md:hidden flex-col space-y-2 bg-black text-white absolute top-16 left-0 right-0 hidden" id="menu-content">
          <a
            href="/"
            className="block text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Home
          </a>
          <a
            href="/Artist"
            className="block text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Artist
          </a>
          <a
            href="/Music"
            className="block text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Music
          </a>
          <a
            href="/Marketplace"
            className="block text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            NFT Marketplace
          </a>
          <a
            href="#"
            className="block text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            News & Updates
          </a>
          <a
            href="/Community"
            className="block text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            Community
          </a>
          <a
            href="/FAQ"
            className="block text-white hover:bg-gray-700 rounded-lg px-3 py-1"
          >
            FAQs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
