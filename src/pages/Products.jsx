import React from 'react';
import { useState, useEffect, useRef } from "react";

const handicraft_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753269091/DSC_9844_kf9abv.jpg",
    label: "Assorted Craft",
    alt: "Assorted Craft lamp with intricate woven design and warm light inside",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440302/Untitled_design_18_glhuol.webp",
    label: "Books on Craft",
    alt: "Open book with craft-related text and red cover, representing books on craft",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440303/Untitled_design_17_mvylmy.webp",
    label: "Horn / Camelbone Craft",
    alt: "Hexagonal box with colorful painted scene, representing horn and camelbone craft",
  },
];
const jewellery_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753438960/DSC_9942_y5ykhx.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440301/Untitled_design_14_hqawod.webp",

    alt: "Elegant Kundan earrings with gold plating and red gemstones",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440303/Untitled_design_16_nvaav7.webp",
    label: "Meenakari Bangles",
    alt: "Brightly colored Meenakari bangles with floral patterns",
  },
];

const textile_items = [
  {
    src: "/images/textiles/block_print.jpg",
    alt: "Block Print Fabric",
    label: "Hand Block Printed Cotton",
  },
  {
    src: "/images/textiles/bandhani.jpg",
    alt: "Bandhani Textile",
    label: "Traditional Bandhani Work",
  },
  {
    src: "/images/textiles/leheriya.jpg",
    alt: "Leheriya Print",
    label: "Colorful Leheriya Dupatta",
  },
];

const blanket_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753269110/DSC_9911_i2axzt.jpg",
    label: "Jaipuri Razai",
    alt: "Traditional Jaipuri quilt with floral hand block print in vibrant colors",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440671/DSC_9921_ivupgs.jpg",
    label: "Handloom Blanket",
    alt: "Warm handloom woolen blanket with striped design in earthy tones",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753269110/DSC_9911_i2axzt.jpg",
    label: "Embroidered Quilt",
    alt: "Rajasthani embroidered quilt with mirror work and colorful threads",
  },
];

const painting_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753441660/DSC_9836_np0boh.webp",
    label: "Miniature Painting",
    alt: "Traditional Rajasthani miniature painting depicting royal court scene with fine details",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753441890/DSC_9849_obwxjd.jpg",
    label: "Phad Painting",
    alt: "Vibrant Phad painting on cloth showcasing folk deities and storytelling art",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/pichwai-painting.jpg",
    label: "Pichwai Painting",
    alt: "Pichwai artwork featuring intricate designs and images of Lord Krishna",
  },
];





const ProductPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? handicraft_items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === handicraft_items.length - 1 ? 0 : prev + 1));
  };


  return (
    <div>
    <div className=" text-white  relative bg-[url('https://img.freepik.com/premium-photo/abstract-background-design-hd-dark-spring-green-color_851755-36184.jpg?ga=GA1.1.1554648406.1748514457&w=740')] bg-blend-overlay bg-cover px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Hero Text */}
       {/* Left Side - Hero Text */}
<div>
  <p className="text-sm uppercase mb-2 tracking-wide text-[#e2dbc8]">Shop By Craft</p>
  <h1 className="font-playfair font-bold text-5xl font-serif  leading-[1.2] max-w-md">
    Explore different varieties of products at <span className="font-semibold">R.S.S.C.I</span>
  </h1>
  
</div>


        {/* Right Side - Description aligned to bottom */}
     <div className="flex flex-col justify-end max-w-md h-full space-y-4">
  <hr className="border-t border-gray-400" />

  <p className="max-w-[420px] text-base leading-7 font-medium  text-[#f5f0e6]">
    R.S.S.C.I is dedicated to promoting the rich legacy of Rajasthan’s small-scale and cottage industries.
    We aim to provide a platform for local artisans and entrepreneurs to showcase their unique, handmade,
    and regionally inspired products — supporting rural livelihoods and preserving traditional skills.
  </p>
</div>

      </div>
      
    </div>
       <div className=" text-[#3f4333] font-quicksand py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center md:items-start">
      {/* Left Side */}
      <div className="md:w-2/4">
        <h1 className="text-4xl font-extrabold mb-6 leading-tight font-josefin">
          Handicrafts
        </h1>
        <p className="text-lg leading-relaxed font-quicksand mb-8">
          Featured here are a medley of some distinctive pieces and artifacts
          that may not belong to a specific craft form included in the listings,
          but yet warrant a representation in a mixed, generic category.
        </p>
        <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
          Shop Handicrafts
        </button>
      </div>

      {/* Right Side - Custom Carousel */}
 <div className="w-full flex justify-center items-center px-4 ">
  <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
    {/* Full-width Image */}
    <img
      src={handicraft_items[currentIndex].src}
      alt={handicraft_items[currentIndex].alt}
      className="w-full h-full object-cover rounded-lg transition-all duration-700"
    />

    {/* Label (Optional, you can move it elsewhere if needed) */}
    <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
      {handicraft_items[currentIndex].label}
    </p>

    {/* Controls */}
    <button
      onClick={handlePrev}
      aria-label="Previous"
      className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
    >
      ‹
    </button>
    <button
      onClick={handleNext}
      aria-label="Next"
      className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
    >
      ›
    </button>

    {/* Dots */}
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {handicraft_items.map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition ${
            i === currentIndex ? "bg-white" : "bg-gray-400"
          }`}
        ></div>
      ))}
    </div>
  </div>
</div>


    </div>
           
        <div className="text-[#3f4333] font-quicksand py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center md:items-start">
  {/* Left Side */}
  <div className="md:w-2/4">
    <h1 className="text-4xl font-extrabold mb-6 leading-tight font-josefin">
      Jewellery
    </h1>
    <p className="text-lg leading-relaxed font-quicksand mb-8">
      Discover timeless elegance with our curated collection of artisanal jewellery. 
      From intricately designed necklaces to traditional earrings, each piece tells a story of craftsmanship and beauty.
    </p>
    <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
      Shop Jewellery
    </button>
  </div>

  {/* Right Side - Custom Carousel */}
  <div className="w-full flex justify-center items-center px-4">
    <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
      {/* Full-width Image */}
      <img
        src={jewellery_items[currentIndex].src}
        alt={jewellery_items[currentIndex].alt}
        className="w-full h-full object-contain rounded-lg transition-all duration-700"
      />

      {/* Label */}
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
        {jewellery_items[currentIndex].label}
      </p>

      {/* Controls */}
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        aria-label="Next"
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {jewellery_items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="text-[#3f4333] font-quicksand py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center md:items-start">
  {/* Left Side */}
  <div className="md:w-2/4">
    <h1 className="text-4xl font-extrabold mb-6 leading-tight font-josefin">
      Blankets
    </h1>
    <p className="text-lg leading-relaxed font-quicksand mb-8">
      Embrace warmth and comfort with our premium collection of traditional Rajasthani blankets. 
      Each piece is a blend of cultural heritage and fine craftsmanship, ideal for cozy living.
    </p>
    <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
      Shop Blankets
    </button>
  </div>

  {/* Right Side - Custom Carousel */}
  <div className="w-full flex justify-center items-center px-4">
    <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
      {/* Full-width Image */}
      <img
        src={blanket_items[currentIndex].src}
        alt={blanket_items[currentIndex].alt}
        className="w-full h-full object-cover rounded-lg transition-all duration-700"
      />

      {/* Label */}
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
        {blanket_items[currentIndex].label}
      </p>

      {/* Controls */}
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        aria-label="Next"
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {blanket_items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="text-[#3f4333] font-quicksand py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center md:items-start">
  {/* Left Side */}
  <div className="md:w-2/4">
    <h1 className="text-4xl font-extrabold mb-6 leading-tight font-josefin">
      Paintings
    </h1>
    <p className="text-lg leading-relaxed font-quicksand mb-8">
      Discover timeless artistry through our curated collection of traditional and folk Rajasthani paintings. 
      Each brushstroke brings to life tales of culture, history, and vibrant expressions.
    </p>
    <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
      Shop Paintings
    </button>
  </div>

  {/* Right Side - Custom Carousel */}
  <div className="w-full flex justify-center items-center px-4">
    <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
      {/* Full-width Image */}
      <img
        src={painting_items[currentIndex].src}
        alt={painting_items[currentIndex].alt}
        className="w-full h-full object-cover rounded-lg transition-all duration-700"
      />

      {/* Label */}
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
        {painting_items[currentIndex].label}
      </p>

      {/* Controls */}
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        aria-label="Next"
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {painting_items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>



      <div className="text-[#3f4333] font-quicksand py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center md:items-start">
  {/* Left Side */}
  <div className="md:w-2/4">
    <h1 className="text-4xl font-extrabold mb-6 leading-tight font-josefin">
      Textiles
    </h1>
    <p className="text-lg leading-relaxed font-quicksand mb-8">
      Explore the vibrant threads of Rajasthan's textile legacy — from colorful block-printed fabrics to rich bandhani and leheriya designs. 
      Each textile piece showcases the artistry of our local weavers and dyers.
    </p>
    <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
      Shop Textiles
    </button>
  </div>

  {/* Right Side - Carousel */}
  <div className="w-full flex justify-center items-center px-4">
    <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
      <img
        src={textile_items[currentIndex].src}
        alt={textile_items[currentIndex].alt}
        className="w-full h-full object-cover rounded-lg transition-all duration-700"
      />
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
        {textile_items[currentIndex].label}
      </p>
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        aria-label="Next"
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
      >
        ›
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {textile_items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>

    
  );
};

export default ProductPage;
