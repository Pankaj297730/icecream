import React from "react";

const Collections = () => {
  return (
    <section className="bg-[#faf2e7]  px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-24 lg:gap-80">
        {/* Left Content */}
        <div className="flex-1 max-w-4xl text-[#1c1c1c]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-12 mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-[#1c1c1c] lg:leading-snug">
              Explore our <br />
              collections
            </h1>
            <button className="px-6 py-2 border border-[#1a1a1a] text-[#1c1c1c] text-base font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 ease-in-out rounded shadow-sm">
              Shop Now
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-6 text-lg">
            <div>
              <ul>
                {["Handicrafts", "Textiles", "Jewelry"].map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {["Blankets", "Home & Living", "Gifts"].map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
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
