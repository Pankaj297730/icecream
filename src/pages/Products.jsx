import Jewellery from '@/components/jewellery';
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





const mojdi_items = [
  {
    src: "https://example.com/mojdi1.jpg",
    label: "Classic Leather Mojdi",
    alt: "Brown leather traditional Rajasthani mojdi with stitching detail",
  },
  {
    src: "https://example.com/mojdi2.jpg",
    label: "Colorful Embroidered Mojdi",
    alt: "Colorful handcrafted mojdi with traditional embroidery",
  },
    {
    src: "https://storage.googleapis.com/a1aa/image/pichwai-painting.jpg",
    label: "Pichwai Painting",
    alt: "Pichwai artwork featuring intricate designs and images of Lord Krishna",
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

const carpet_items = [
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
  // const [mojdiIndex, setmojdiIndex] = useState(0);

  const [handicraftIndex, setHandicraftIndex] = useState(0);
// const [jewelleryIndex, setJewelleryIndex] = useState(0);
const [mojdiIndex, setMojdiIndex] = useState(0);
const [paintingIndex, setPaintingIndex] = useState(0);

const [carpetIndex, setCarpetIndex] = useState(0);
const [textileIndex, setTextileIndex] = useState(0);

  const intervalRef = useRef(null);

// Handicraft
const handlePrevHandicraft = () => {
  setHandicraftIndex((prev) =>
    prev === 0 ? handicraft_items.length - 1 : prev - 1
  );
};

const handleNextHandicraft = () => {
  setHandicraftIndex((prev) =>
    prev === handicraft_items.length - 1 ? 0 : prev + 1
  );
};

// Mojdi
const handlePrevMojdi = () => {
  setMojdiIndex((prev) =>
    prev === 0 ? mojdi_items.length - 1 : prev - 1
  );
};

const handleNextMojdi = () => {
  setMojdiIndex((prev) =>
    prev === mojdi_items.length - 1 ? 0 : prev + 1
  );
};

// Painting
const handlePrevPainting = () => {
  setPaintingIndex((prev) =>
    prev === 0 ? painting_items.length - 1 : prev - 1
  );
};

const handleNextPainting = () => {
  setPaintingIndex((prev) =>
    prev === painting_items.length - 1 ? 0 : prev + 1
  );
};

// Carpet
const handlePrevCarpet = () => {
  setCarpetIndex((prev) =>
    prev === 0 ? carpet_items.length - 1 : prev - 1
  );
};

const handleNextCarpet = () => {
  setCarpetIndex((prev) =>
    prev === carpet_items.length - 1 ? 0 : prev + 1
  );
};

// Textile
const handlePrevTextile = () => {
  setTextileIndex((prev) =>
    prev === 0 ? textile_items.length - 1 : prev - 1
  );
};

const handleNextTextile = () => {
  setTextileIndex((prev) =>
    prev === textile_items.length - 1 ? 0 : prev + 1
  );
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

<div><Jewellery/></div>


      <div className="text-[#3f4333] font-quicksand py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center md:items-start">
        {/* Left Side */}
        <div className="md:w-2/4">
          <h1 className="text-4xl font-extrabold mb-6 leading-tight font-josefin">
            Carpets
          </h1>
          <p className="text-lg leading-relaxed font-quicksand mb-8">
            Explore our handwoven collection of premium carpets that blend tradition with modern elegance.
            Each piece is crafted with care to bring warmth, style, and cultural richness to your living spaces.
          </p>
          <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
            Shop Carpets
          </button>
        </div>

        {/* Right Side - Custom Carousel */}
        <div className="w-full flex justify-center items-center px-4">
          <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
            {/* Full-width Image */}
            <img
              src={carpet_items[carpetIndex].src}
              alt={carpet_items[carpetIndex].alt}
              className="w-full h-full object-contain rounded-lg transition-all duration-700"
            />

            {/* Label */}
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
              {carpet_items[carpetIndex].label}
            </p>

            {/* Controls */}
            <button
              onClick={handlePrevCarpet}
              aria-label="Previous"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ‹
            </button>
            <button
              onClick={handleNextCarpet}
              aria-label="Next"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carpet_items.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition ${i === carpetIndex ? "bg-white" : "bg-gray-400"
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
              src={textile_items[textileIndex].src}
              alt={textile_items[textileIndex].alt}
              className="w-full h-full object-cover rounded-lg transition-all duration-700"
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
              {textile_items[textileIndex].label}
            </p>
            <button
              onClick={handlePrevTextile}
              aria-label="Previous"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ‹
            </button>
            <button
              onClick={handleNextTextile}
              aria-label="Next"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ›
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {textile_items.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition ${i === textileIndex ? "bg-white" : "bg-gray-400"
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
              src={painting_items[paintingIndex].src}
              alt={painting_items[paintingIndex].alt}
              className="w-full h-full object-cover rounded-lg transition-all duration-700"
            />

            {/* Label */}
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
              {painting_items[paintingIndex].label}
            </p>

            {/* Controls */}
            <button
              onClick={ handlePrevPainting}
              aria-label="Previous"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ‹
            </button>
            <button
              onClick={ handleNextPainting}
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
                  className={`w-3 h-3 rounded-full transition ${i === paintingIndex ? "bg-white" : "bg-gray-400"
                    }`}
                ></div>
              ))}
            </div>
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
              src={handicraft_items[handicraftIndex].src}
              alt={handicraft_items[handicraftIndex].alt}
              className="w-full h-full object-cover rounded-lg transition-all duration-700"
            />

            {/* Label (Optional, you can move it elsewhere if needed) */}
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
              {handicraft_items[handicraftIndex].label}
            </p>

            {/* Controls */}
            <button
              onClick={handlePrevHandicraft}
              aria-label="Previous"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ‹
            </button>
            <button
              onClick={handleNextHandicraft}
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
                  className={`w-3 h-3 rounded-full transition ${i === handicraftIndex ? "bg-white" : "bg-gray-400"
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
            Mojdi
          </h1>
          <p className="text-lg leading-relaxed font-quicksand mb-8">
            Step into elegance with our handcrafted Mojdi – traditional footwear made by skilled artisans.
            Each pair blends heritage, comfort, and timeless design, perfect for cultural events or everyday grace.
          </p>
          <button className="border border-[#3f4333] text-[#3f4333] px-6 py-3 text-base hover:bg-[#3f4333] hover:text-[#f7f0e3] transition-colors duration-300">
            Shop Mojdi
          </button>
        </div>

        {/* Right Side - Custom Carousel */}
        <div className="w-full flex justify-center items-center px-4">
          <div className="relative w-2/3 max-w-4xl h-[300px] md:h-[320px]">
            {/* Full-width Image */}
            <img
              src={mojdi_items[mojdiIndex].src}
              alt={mojdi_items[mojdiIndex].alt}
              className="w-full h-full object-cover rounded-lg transition-all duration-700"
            />

            {/* Label */}
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-sm md:text-base text-gray-800 font-semibold shadow">
              {mojdi_items[mojdiIndex].label}
            </p>

            {/* Controls */}
            <button
              onClick={handlePrevMojdi}
              aria-label="Previous"
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ‹
            </button>
            <button
              onClick={handlePrevMojdi}
              aria-label="Next"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-2 shadow-md transition"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {mojdi_items.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition ${i === mojdiIndex ? "bg-white" : "bg-gray-400"
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
