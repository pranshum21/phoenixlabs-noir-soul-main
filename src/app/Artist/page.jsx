import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />

      {/* Artist Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Meet Our Artists</h1>

            {/* Artist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Artist Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="/assets/artist1.jpg" alt="Artist 1" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">FN Fenti®</h2>
                  <p className="text-gray-700 mb-4">Genre: Genre 1</p>
                  <p className="text-gray-600 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nisi et leo pretium, vitae fringilla orci ullamcorper.</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300">Listen Now</button>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-600">Follow:</span>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-800 ml-2">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-800 ml-2">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artist Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="/assets/artist2.jpg" alt="Artist 2" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Aria Harmony®</h2>
                  <p className="text-gray-700 mb-4">Genre: Genre 2</p>
                  <p className="text-gray-600 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nisi et leo pretium, vitae fringilla orci ullamcorper.</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300">Listen Now</button>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-600">Follow:</span>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-800 ml-2">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-800 ml-2">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artist Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="/assets/artist3.jpg" alt="Artist 3" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Ava Rain®</h2>
                  <p className="text-gray-700 mb-4">Genre: Genre 3</p>
                  <p className="text-gray-600 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat nisi et leo pretium, vitae fringilla orci ullamcorper.</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300">Listen Now</button>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-600">Follow:</span>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-800 ml-2">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-800 ml-2">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-200 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Discover More Music</h2>
          <p className="text-gray-600 mb-8">Ready to explore more? Dive into our extensive catalog of tracks across various genres and find your next favorite song.</p>
          <button className="bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-300">Explore Music</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Fans Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 rounded-lg p-6">
              <p className="text-gray-800 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id aliquet risus."</p>
              <p className="text-gray-600">- John Doe</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-6">
              <p className="text-gray-800 mb-4">"Suspendisse euismod massa id ligula finibus, nec convallis urna volutpat."</p>
              <p className="text-gray-600">- Jane Doe</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-6">
              <p className="text-gray-800 mb-4">"Proin scelerisque magna a libero mattis, eget convallis elit convallis. Aenean dapibus justo in consectetur posuere."</p>
              <p className="text-gray-600">- Alex Smith</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
