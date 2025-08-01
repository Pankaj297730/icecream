import React from "react";
// import leafImage from "/Illustrations_by__Agata_Wierzbicka-removebg-preview.png";

const AmberSection = () => {
  return (
    <section className="relative bg-[#DBD3C785] py-24 px-6 md:px-20 overflow-hidden">
      {/* Right Leaf */}
      <img
        src="https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_800,q_auto/v1753614696/Illustrations_by__Agata_Wierzbicka-removebg-preview_omr17l.png"
        alt="right leaf"
        className="absolute right-0 bottom-0 w-[350px] md:w-[500px] pointer-events-none select-none opacity-70"
      />

      {/* Overlay behind text for better readability */}
      {/* <div className="absolute inset-0 bg-[#f9f1e7] bg-opacity-50 pointer-events-none"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-44">
        {/* Left Text Content */}
        <div className="max-w-2xl text-left">
         <p className="text-base text-[#3f3f2f] mb-2 font-quicksand">Echoes of Amber</p>
<h2 className="text-[#1c1c1c] font-serif  text-4xl md:text-5xl  font-semibold mb-6 md:leading-snug">
  Handmade Stories, Crafted with Love
</h2>

      <p className="text-[#111111] text-lg md:text-lg leading-relaxed font-quicksand">
            Whispers Of Royal Rajasthan, Where every craft echoes the View legacy of Amer . 
            Timeless creation inspired by the royal forts, palaces and Artisan of Jaipur Heart.
          </p>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-14 text-[#1c1c1c] text-center mt-12 md:mt-0 md:text-left md:ml-20">
          <div>
            <p className="font-playfair text-[56px] leading-none font-semibold">
              35<span className="align-super text-2xl">+</span>
            </p>
            <p className="text-xs tracking-widest uppercase font-quicksand mt-1">Years</p>
          </div>
          <div>
            <p className="font-playfair text-[56px] leading-none font-semibold">200</p>
            <p className="text-xs tracking-widest uppercase font-quicksand mt-1">
              Indian Artisans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmberSection;
