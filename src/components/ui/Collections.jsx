import React from "react";

const Collections = () => {
  return (
    <section className="bg-[#faf2e7] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-24 lg:gap-80">
        {/* Left Content */}
        <div className="flex-1 max-w-4xl text-[#1c1c1c]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-12 mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-[#1c1c1c] lg:leading-snug">
              Explore our <br />
              collection
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-6 text-lg">
            <div>
              <ul>
                <a href="/products#handicrafts">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Handicrafts
                  </li>
                </a>
                <a href="/products#textiles">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Textiles
                  </li>
                </a>
                <a href="/products#jewellery">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Jewellery
                  </li>
                </a>
              </ul>
            </div>

            <div>
              <ul>
                <a href="/products#carpets">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Carpets
                  </li>
                </a>
                <a href="/products#paintings">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Paintings
                  </li>
                </a>
                <a href="/products#mojdis">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Mojdis
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col w-[360px] h-[320px] items-center lg:items-start text-center lg:text-left animate-fade-in">
          <img
            src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1753269092/DSC_9846_clxauj.jpg"
            alt="Antique ox cart sculpture"
            className="w-full h-full object-cover rounded shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Collections;
