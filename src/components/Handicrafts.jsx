import React, { useState, useEffect, useMemo, useCallback } from "react";

const handicraft_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754028521/No_photo_available_9_eq3ldn.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Painted cabinet",
  
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754467741/DSC_9795_jjcty2.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Marble inlays",
  
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754470408/8293ff50-4c11-4dcc-99f4-8516f08ed9b3.png",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Carved Sheesham Woods",
  
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1753800357/No_photo_available_12_rjt6ce.jpg",
    label: "Marble inlays",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Metal Work",
  
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754028523/No_photo_available_10_fqtxhr.jpg",
    label: "Meenakari",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Meenakari",
  
  },
];

const categories = [
  {
    name: "Painted cabinet",
    description:
      "Vibrant hand-painted wooden cabinets adorned with traditional Rajasthani motifs, adding charm and colour to any space.",
  },
  {
    name: "Carved Sheesham Woods",
    description:
      "Expertly handcrafted from durable Sheesham wood, featuring intricate carvings that showcase Rajasthan’s rich artistic heritage.",
  },
  {
    name: "Metal Work",
    description:
      "Hammered and cast to perfection – decor idols and artifacts of rustic elegance.",
  },
  {
    name: "Marble inlays",
    description:
      "Intricate royal and geometric patterns, hand-laid in fine marble creations.",
  },
  {
    name: "Meenakari",
    description: "Brilliant enamel artistry adorning decor.",
  },
];

const Handicrafts = () => {
  const [activeCategory, setActiveCategory] = useState("Painted cabinet");
  const [handicraftIndex, setHandicraftIndex] = useState(0);

  const filteredItems = useMemo(
    () => handicraft_items.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryData = useMemo(
    () => categories.find((cat) => cat.name === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    setHandicraftIndex(0);
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
            Handicraft Collection
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Featured here are a medley of some distinctive pieces and artifacts that may not belong
            to a specific craft form included in the listings, but yet warrant a representation in
            a mixed, generic category.
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
                    src={filteredItems[handicraftIndex].src}
                    alt={filteredItems[handicraftIndex].alt}
                    width={filteredItems[handicraftIndex].width}
                    height={filteredItems[handicraftIndex].height}
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

export default Handicrafts;
