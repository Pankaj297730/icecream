import React, { useState, useEffect } from "react";

const carpet_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799851/No_photo_available_6_ymzvgc.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Pure Woolen Carpet",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799850/No_photo_available_7_zavdjx.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Silk Woolen Carpet",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799851/No_photo_available_6_ymzvgc.jpg",
    label: "Kundan Earrings",
    alt: "Elegant Kundan earrings with gold plating and red gemstones",
    category: "Pure Silk Carpet",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799859/No_photo_available_5_yqhi6u.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Silk on Silk Carpet",
  },
   {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Modern & Contemporary Carpet",
  },
];

const categories = [
  { name: "Pure Woolen Carpet", description: "Soft Underfoot and richly toatured handknotted with traditional skill." },
  { name: "Silk Woolen Carpet", description: "A Perfect blend of Shine and womamath in exclusive weaving patterns." },
  { name: "Pure Silk Carpet", description: "Luxurious glossy Silk woven into intricate Stories of elegance." },
  { name: "Silk on Silk Carpet", description: "Double Silk grandeur, Silk Pile On Silk base for the ultimate in refinement." },
  { name: "Modern & Contemporary Carpet", description: "Bold artistic design for todays homes, with timeless Craftsmanship." },
];

const Carpets = () => {
  const [activeCategory, setActiveCategory] = useState("Pure Woolen Carpet");
  const [CarpetIndex, setCarpetIndex] = useState(0);

  const filteredItems = carpet_items.filter(
    (item) => item.category === activeCategory
  );

  const activeCategoryData = categories.find((cat) => cat.name === activeCategory);

  useEffect(() => {
    setCarpetIndex(0);
  }, [activeCategory]);

  return (
    <div className="text-[#3f4333] font-quicksand py-16 px-4 w-full flex justify-center">
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-7xl">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 mt-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-josefin leading-tight">
            Carpet Collection
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
          Discover timeless elegance with our curated collection of handcrafted carpets — where tradition meets artistry underfoot.
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
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
                <div className="w-full aspect-[3/1] mb-4">
                  <img
                    src={filteredItems[CarpetIndex].src}
                    alt={filteredItems[CarpetIndex].alt}
                    className="w-full h-full object-cover rounded-md shadow transition-all duration-500"
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
