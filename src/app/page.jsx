import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="inset-0 mx-auto px-28 py-16 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/web-bg.png')", // Adjust the opacity here
        }}
      >
        <div className="flex flex-col items-center justify-center lg:flex-row h-[40vh] md:h-[70vh] mx-10 md:mx-0">
          <div className="md:w-1/2">
            <h2 className="flex flex-col m-0 gap-3 md:gap-1 mt-20">
              <span className="text-7xl text-white font-bold">NOIR</span>
              <span className="text-7xl font-bold text-yellow-500">SOUL</span>
              <span className="text-7xl text-white font-bold">SYNDICATE</span>
            </h2>
            <p className="py-3 text-white">
            Empowering artists of color through revolutionary NFT and cryptocurrency innovations in the music industry
            </p>
            <Link
              href="#"
              className="my-4 relative inline-flex items-center justify-start py-3 pl-4 pr-12 mb-20 overflow-hidden font-semibold text-sky transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group border border-sky"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-sky group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-amber-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-light">
                Get Started
              </span>
            </Link>
          </div>
          <div className="hidden md:block md:w-1/2 px-20 mb-10">
            <Image
              src="/logo.png"
              alt="Head Image"
              width={2048}
              height={1363}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-28 py-16 bg-black">
        <h1 className="text-white mb-10 mt-6 text-center text-4xl">
          Welcome to Noir soul syndicate
        </h1>
        <div className="text-center">
          <span className=" text-white text-xl text-center">
            At{" "}
            <span className="font-bold text-yellow-500">
              Noir Soul Syndicate
            </span>
            , where we're revolutionizing the music industry by empowering artists of color globally. Our mission is 
            to provide the tools and platforms necessary for creative success in a digital world. Through innovative 
            technologies and a commitment to equity, we're fostering an inclusive and vibrant music community. Join us in 
            transforming how music is created, shared, and valued.
          </span>
          <div className="flex justify-center items-center">
            <a href="/About" className="inline-block px-20 py-2 bg-red-600 rounded-md mt-10 text-white font-semibold hover:bg-red-700 transition duration-300">
              Know More
            </a>
          </div>
          <div className="container mx-auto px-4 mt-16">
            <Image
              src="/assets/music.jpg"
              alt="Image"
              width={800}
              height={600}
              className="ml-52"
            />
          </div>
        </div>
      </div>
<hr/>
<section className="bg-black py-20 ">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-4 text-yellow-500">Latest Releases</h2>
    <p className="text-white mb-8">Stay tuned for more groundbreaking music from emerging and established artists at Noir Soul Syndicate.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Placeholder content for latest releases */}
      <div className="bg-white p-4 rounded-lg shadow-md w-5/6 mx-auto">
        <h3 className="text-xl font-bold mb-2">Album Title</h3>
        <p className="text-gray-700">Artist Name</p>
        <p className="text-gray-600">Release Date: January 1, 2024</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md w-5/6 mx-auto">
        <h3 className="text-xl font-bold mb-2">Album Title</h3>
        <p className="text-gray-700">Artist Name</p>
        <p className="text-gray-600">Release Date: January 1, 2024</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md w-5/6 mx-auto">
        <h3 className="text-xl font-bold mb-2">Album Title</h3>
        <p className="text-gray-700">Artist Name</p>
        <p className="text-gray-600">Release Date: January 1, 2024</p>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
};

export default HomePage;
