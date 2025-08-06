import React, { useState, useEffect } from "react";

const jewellery_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754026615/No_photo_available_4_z5vzjs.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Precious & Semi Precious Gem Stone",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1753440301/DSC_9942_elumyn.webp",
    label: "Kundan Earrings",
    alt: "Elegant Kundan earrings with gold plating and red gemstones",
    category: "Kundan Jewellery",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754475001/No_photo_available_15_vu5k4h.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Gold and White Gold Studded Jewellery",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754027940/Untitled_design_15_lfjn4q.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Silver Jewellery",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754474511/No_photo_available_14_uposgc.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Beed Necklaces",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1753799218/Untitled_design_1_kpokx9.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Enamuel  Work",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754027101/No_photo_available_1_fsjmg4.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Lac Bangles",
  },
];

const categories = [
  { name: "Precious & Semi Precious Gem Stone", description: "Elegantly cut gems, sparkling with nature's finest colors and energy." },
  { name: "Kundan Jewellery", description: "Traditional royal beauty crafted in intricate gold and stone setting." },
  { name: "Gold and White Gold Studded Jewellery", description: "Modern luxury meets tradition in our finely studded gold and white gold pieces." },
  { name: "Silver Jewellery", description: "Shimmering silver designs that blend ethnic charm with contemporary style." },
  { name: "Beed Necklaces", description: "Vibrant and colorful beaded strands perfect for adding a folk flair to your look." },
  { name: "Enamuel  Work", description: "Rich Meenakari art adds colorful life to timeless jewellery." },
  { name: "Lac Bangles", description: "Bright handcrafted Lac bangles that bring tradition and color to every wrist." },
];

const Jewellery = () => {
  const [activeCategory, setActiveCategory] = useState("Precious & Semi Precious Gem Stone");
  const [jewelleryIndex, setJewelleryIndex] = useState(0);

  const filteredItems = jewellery_items.filter(item => item.category === activeCategory);
  const activeCategoryData = categories.find(cat => cat.name === activeCategory);

  useEffect(() => {
    setJewelleryIndex(0);
  }, [activeCategory]);

  useEffect(() => {
  jewellery_items.forEach((item) => {
    const img = new Image();
    img.src = item.src;
  });
}, []);


  return (
    <div className="text-[#3f4333] font-quicksand py-6 sm:py-16 px-4 w-full flex justify-center">
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-7xl">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 mt-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-josefin leading-tight">
            Jewellery Collection
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Discover timeless elegance with our curated collection of artisanal jewellery.
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
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
                    src={filteredItems[jewelleryIndex].src}
                    alt={filteredItems[jewelleryIndex].alt}
                    loading="lazy"
                    width="800"
                    height="266"
                    className="w-full h-full object-cover rounded-md shadow"
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

export default Jewellery;
