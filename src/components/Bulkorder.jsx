import React from "react";
import { Link } from "react-router-dom";

const BulkOrder = () => {
  return (
    <section className="relative bg-[#DBD3C785]  py-24 px-6 md:px-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24">
         {/* Left Text Content */}
         <div>
          <img
            src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1753269088/DSC_9840_bcahb8.jpg"
            alt="Craft sculpture"
            className="w-[360px] h-[320px] object-cover rounded shadow-md"
          />
        </div>
       
          {/* Right Side: Image Only */}
        <div className="max-w-2xl text-left">
          <p className="text-base mb-2 font-quicksand">For large orders</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 md:leading-snug">
            Explore a wide <br />
            selection of craft forms
          </h2>
          <p className="text-lg leading-relaxed font-quicksand">
            Discover a world of heritage and handwork at our Amber showroom. Each piece—from
            intricate handwoven fabrics and gemstone-studded jewelry to clay, wood, and metal
            crafts—tells the tale of Indian artisanship, rooted in time yet designed for today.
          </p>
          <div className="flex relative gap-6">

       <Link to="/products">
          <button
            type="button"
            className="hover:bg-white border mt-6 border-[#3f422d] bg-[#2a2c1d] hover:text-black text-white px-6 py-3 font-light text-[1rem] transition-colors rounded focus:outline-yellow-400"
          >
            Explore Products
          </button>
          </Link>
     <Link to="/contact-us">
              <button
            type="button"
            className="bg-transparent border mt-6 border-[#3f422d] hover:bg-[#2a2c1d] text-black hover:text-white px-6 py-3 font-light text-[1rem] transition-colors rounded focus:outline-yellow-400"
          >
            Get in touch
          </button>
          </Link>
             </div>
        </div>

      
       
      </div>
    </section>
  );
};

export default BulkOrder;
