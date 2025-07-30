import React, { useState, useEffect } from "react";

const mojdis_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Traditional Rajasthani Mojdi",
  },
   {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Everyday Comfort Mojdi",
  },
];

const categories = [
  { name: "Traditional Rajasthani Mojdi", description: "Handcrafted Rajasthani Mojdis with ethnic patterns and rich colors — perfect for festive occasions." },
  { name: "Everyday Comfort Mojdi", description: "Simple yet stylish Mojdis designed for daily wear — combining tradition with soft soles and lasting comfort." },
];

const Mojdis = () => {
  const [activeCategory, setActiveCategory] = useState("Traditional Rajasthani Mojdi");
  const [MojdiIndex, setMojdiIndex] = useState(0);

  const filteredItems = mojdis_items.filter(
    (item) => item.category === activeCategory
  );

  const activeCategoryData = categories.find((cat) => cat.name === activeCategory);

  useEffect(() => {
    setMojdiIndex(0);
  }, [activeCategory]);

  return (
    <div className="text-[#3f4333] font-quicksand py-6 sm:py-16 px-4 w-full flex justify-center">
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-7xl">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 mt-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-josefin leading-tight">
  Mojdi Collection
</h1>
<p className="text-base md:text-lg leading-relaxed mb-6">
  Step into tradition with our handcrafted Mojdis — a perfect blend of ethnic design, comfort, and timeless style.
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
                    src={filteredItems[MojdiIndex].src}
                    alt={filteredItems[MojdiIndex].alt}
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

export default Mojdis;
