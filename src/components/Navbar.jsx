import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" height={50} width={110} />
          <span className="text-yellow-500 font-bold text-lg ml-4">
            Noir Soul Syndicate{" "}
          </span>
        </div>
        <div className="hidden md:block">
          <a
            href="/"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Home
          </a>
          <a
            href="/Artist"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Artist
          </a>
          <a
            href="/Music"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Music
          </a>
          <a
            href="/Marketplace"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            NFT Marketplace
          </a>
          <a
            href="#"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            News & Updates
          </a>
          <a
            href="/Community"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            Community
          </a>
          <a
            href="/FAQ"
            className="text-white hover:bg-orange-400 rounded-lg px-3 py-1 mx-1"
          >
            FAQs
          </a>
          
        </div>
      </div>
    </nav>
  );
};
export default Navbar;