import Carpets from '@/components/Carpets';
import Handicrafts from '@/components/Handicrafts';
import Jewellery from '@/components/jewellery';
import Mojdis from '@/components/Mojdis';
import Paintings from '@/components/Paintings';
import Textiles from '@/components/Textiles';
import Navbar from '@/components/ui/Navbar';
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
      <Navbar />
      <div className=" text-white  relative bg-[url('https://img.freepik.com/premium-photo/abstract-background-design-hd-dark-spring-green-color_851755-36184.jpg?ga=GA1.1.1554648406.1748514457&w=740')] bg-blend-overlay bg-cover px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Hero Text */}
          {/* Left Side - Hero Text */}
          <div>
            <p className="text-sm uppercase mb-2 tracking-wide text-[#e2dbc8]">Shop By Products</p>
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
      <Jewellery />
      <Carpets />
      <Textiles />
      <Paintings />
      <Handicrafts />
      <Mojdis />
    </div>
  );
};

export default ProductPage;
