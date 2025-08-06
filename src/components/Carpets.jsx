import React, { useState, useEffect, useMemo, useCallback } from "react";

const carpet_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754027204/DSC_9896_ubyxu7.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Pure Woolen Carpet",
  },
  
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754467729/DSC_0035_d8sxlo.jpg",
    
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Silk Woolen Carpet",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754027205/DSC_9887_lygl8w.jpg",
    label: "Kundan Earrings",
    alt: "Elegant Kundan earrings with gold plating and red gemstones",
    category: "Pure Silk Carpet",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754467724/DSC_0059_jmvcnc.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Modern & Contemporary Carpet",
  },
];

const categories = [
  {
    name: "Pure Woolen Carpet",
    description: "Soft underfoot and richly textured, hand-knotted with traditional skill.",
  },
  {
    name: "Silk Woolen Carpet",
    description: "A perfect blend of shine and warmth in exclusive weaving patterns.",
  },
  {
    name: "Pure Silk Carpet",
    description: "Luxurious glossy silk woven into intricate stories of elegance.",
  },
  {
    name: "Modern & Contemporary Carpet",
    description: "Bold artistic designs for today’s homes with timeless craftsmanship.",
  },
];

const Carpets = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [carpetIndex, setCarpetIndex] = useState(0);

  const filteredItems = useMemo(
    () => carpet_items.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryData = useMemo(
    () => categories.find((cat) => cat.name === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    setCarpetIndex(0);
  }, [activeCategory]);

  const handleCategoryClick = useCallback((name) => {
    setActiveCategory(name);
  }, []);

  return (
    <div className="text-[#3f4333] font-quicksand py-6 sm:py-16 px-4 w-full flex justify-center">
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-7xl">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 mt-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-josefin leading-tight">
            Carpet Collection
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Discover timeless elegance with our curated collection of handcrafted carpets — where
            tradition meets artistry underfoot.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-4 py-2 rounded-full border text-sm sm:text-base transition-all ${
                  activeCategory === category.name
                    ? "bg-[#3f4333] text-white"
                    : "border-[#3f4333] text-[#3f4333] hover:bg-[#3f4333] hover:text-[#f7f0e3]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 px-4 flex justify-center">
          <div className="w-full max-w-xl flex flex-col items-center">
            {filteredItems.length > 0 ? (
              <>
                <div className="w-full h-[220px]  sm:h-[350px] mb-4">
                  <img
                    src={filteredItems[carpetIndex].src}
                    alt={filteredItems[carpetIndex].alt}
                    width={filteredItems[carpetIndex].width}
                    height={filteredItems[carpetIndex].height}
                    className="w-full h-full object-cover rounded-md shadow "
                    loading="lazy"
                  />
                </div>

                {activeCategoryData && (
                  <div className="w-full bg-[#f7f0e3] text-[#3f4333] p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-1">
                      {activeCategoryData.name}
                    </h2>
                    <p className="text-base">{activeCategoryData.description}</p>
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-gray-500">No items in this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carpets;
