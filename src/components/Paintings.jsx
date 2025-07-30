import React, { useState, useEffect, useMemo } from "react";

const painting_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/fetch/f_auto,w_auto/v1753606500/https://kcwvbrzhvttmzjqgaqiz.supabase.co/storage/v1/object/public/plot-images/plot-1753539346426-27040-DSC_9836.webp",
    label: "Miniature & Traditional Art 1",
    alt: "Miniature painting showcasing royal court scenes",
    category: "Miniature & Traditional Art",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799515/No_photo_available_3_seotwk.jpg",
    label: "Miniature & Traditional Art 2",
    alt: "Traditional Rajasthani art with nature elements",
    category: "Miniature & Traditional Art",
  },
];

const categories = [
  {
    name: "Miniature & Traditional Art",
    description:
      "Hand-knotted miniatures showing royal stories and nature’s beauty — each one made with great care and skill.",
  },
];

const Paintings = () => {
  const [activeCategory, setActiveCategory] = useState("Miniature & Traditional Art");
  const [paintingIndex, setPaintingIndex] = useState(0);

  const filteredItems = useMemo(
    () => painting_items.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryData = useMemo(
    () => categories.find((cat) => cat.name === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    setPaintingIndex(0);
  }, [activeCategory]);

  const handleNext = () => {
    setPaintingIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setPaintingIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="text-[#3f4333] font-quicksand py-6 sm:py-16 px-4 w-full flex justify-center">
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full max-w-7xl">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 mt-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-josefin leading-tight">
            Painting Collection
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Discover timeless artistry through our curated collection of traditional and folk Rajasthani paintings. Each brushstroke brings to life tales of culture, history, and vibrant expressions.
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
        <div className="w-full lg:w-1/2 px-4 flex flex-col items-center">
          {filteredItems.length > 0 ? (
            <>
              <div className="w-full aspect-[3/1] mb-4 relative">
                <img
                  src={filteredItems[paintingIndex].src}
                  alt={filteredItems[paintingIndex].alt}
                  loading="lazy"
                  width="800"
                  height="266"
                  className="w-full h-full object-cover rounded-md shadow transition-all duration-500"
                />

                {/* Carousel Controls */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#3f4333] text-white p-2 rounded-full"
                      aria-label="Previous painting"
                    >
                      ‹
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3f4333] text-white p-2 rounded-full"
                      aria-label="Next painting"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Info Box */}
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
  );
};

export default Paintings;
