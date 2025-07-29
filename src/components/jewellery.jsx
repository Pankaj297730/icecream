import React, { useState, useEffect, useRef } from "react";

const jewellery_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753438960/DSC_9942_y5ykhx.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Traditional",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440301/Untitled_design_14_hqawod.webp",
    label: "Kundan Earrings",
    alt: "Elegant Kundan earrings with gold plating and red gemstones",
    category: "Gold",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440303/Untitled_design_16_nvaav7.webp",
    label: "Meenakari Bangles",
    alt: "Brightly colored Meenakari bangles with floral patterns",
    category: "Traditional",
  },
];

const categories = [
  {
    name: "Gold",
    description: "Luxurious designs crafted in gold, perfect for festive and bridal occasions.",
  },
  {
    name: "Silver",
    description: "Elegant silver pieces that shine with simplicity and class.",
  },
  {
    name: "Gemstones",
    description: "Colorful gemstone jewellery that brings out your inner royalty.",
  },
];

const Jewellery = () => {
  const [jewelleryIndex, setJewelleryIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Gold");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const intervalRef = useRef(null);

  const handlePrevJewellery = () => {
    setJewelleryIndex((prev) => (prev === 0 ? jewellery_items.length - 1 : prev - 1));
  };

  const handleNextJewellery = () => {
    setJewelleryIndex((prev) => (prev === jewellery_items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="text-[#3f4333] font-quicksand py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center md:items-start">
      {/* Left Side */}
      <div className="md:w-2/4">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight font-josefin">Jewellery</h1>
        <p className="text-lg leading-relaxed font-quicksand mb-4">
          Discover timeless elegance with our curated collection of artisanal jewellery.
        </p>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {categories.map((category) => (
            <div key={category.name} className="relative group">
              <button
                onClick={() => setActiveCategory(category.name)}
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeCategory === category.name
                    ? "bg-[#3f4333] text-white"
                    : "border-[#3f4333] text-[#3f4333] hover:bg-[#3f4333] hover:text-[#f7f0e3]"
                }`}
              >
                {category.name}
              </button>

              {/* Tooltip Description on Hover */}
              {hoveredCategory === category.name && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 text-sm bg-[#f7f0e3] text-[#3f4333] p-3 rounded shadow-lg z-10">
                  {category.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
          Shop {activeCategory}
        </button>
      </div>

      {/* Right Side - Carousel */}
      <div className="w-full flex justify-center items-center px-4">
        <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
          {/* Carousel Image */}
          {jewellery_items[jewelleryIndex] && (
            <img
              src={jewellery_items[jewelleryIndex].src}
              alt={jewellery_items[jewelleryIndex].alt}
              className="w-full h-full object-contain rounded-lg transition-all duration-700"
            />
          )}

          {/* Label */}
          {jewellery_items[jewelleryIndex]?.label && (
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
              {jewellery_items[jewelleryIndex].label}
            </p>
          )}

          {/* Controls */}
          <button
            onClick={handlePrevJewellery}
            aria-label="Previous"
            className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
          >
            ‹
          </button>
          <button
            onClick={handleNextJewellery}
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
                  i === jewelleryIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
