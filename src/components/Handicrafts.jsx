import React, { useState, useEffect, useMemo, useCallback } from "react";
// import React, { useState, useMemo, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

const handicraft_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755012638/No_photo_available_38_l36mjb.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Painted cabinet",
  
  },
    {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755012634/No_photo_available_40_uiudpd.jpg",
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
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755011801/No_photo_available_36_e4c0kz.jpg",
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
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755012632/eb8dbefa9ca8455aeeb73b918d6c5387_e114vo.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Carved Sheesham Woods",
  
  },

   {
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755011805/No_photo_available_37_aeixfl.jpg",
    label: "Marble inlays",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Metal Work",
  
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1753800357/No_photo_available_12_rjt6ce.jpg",
    label: "Marble inlays",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Metal Work",
  
  },
   

  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755011822/No_photo_available_39_j26qbi.jpg",
    label: "Meenakari",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Meenakari",
  
  },
  
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755011802/No_photo_available_35_iryszy.jpg",
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

 
  
    useEffect(() => {
 handicraft_items.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);
  
  
  
  
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  
  

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
        {/* Carousel Wrapper */}
        <div className="relative w-full">
          <div className="overflow-hidden w-full rounded-md shadow" ref={emblaRef}>
            <div className="flex">
              {filteredItems.map((item, index) => (
                <div className="flex-[0_0_100%]" key={index}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-[220px] sm:h-[350px] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev Button */}
          {/* Navigation Buttons */}
          <button
            aria-label="Previous"
       onClick={() => embla && embla.scrollPrev()}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#3f4333] text-white p-2 rounded-full z-10"
          >
            ‹
          </button>
          <button
            aria-label="Next"
         onClick={() => embla && embla.scrollNext()}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#3f4333] text-white p-2 rounded-full z-10"
                
          >
            ›
          </button>
        </div>

        {/* Category Info */}
        {activeCategoryData && (
          <div className="w-full bg-[#f7f0e3] text-[#3f4333] p-4 rounded-lg shadow mt-4">
            <h2 className="text-lg font-semibold mb-1">{activeCategoryData.name}</h2>
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
