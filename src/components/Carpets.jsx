import React, { useState, useEffect, useMemo, useCallback } from "react";
// import React, { useState, useMemo, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

const carpet_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754027204/DSC_9896_ubyxu7.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Pure Woolen Carpet",
  },

    {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755006131/b603e6b5-109b-48db-ab02-8e263fad7a21.png",
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
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754467690/DSC_0007_hgvcq0.jpg",
    
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
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755006274/WhatsApp_Image_2025-08-06_at_15.06.30_4f14ee0c_a1ygt9.jpg",
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
   {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755006345/WhatsApp_Image_2025-08-06_at_15.02.23_c09e90ab_fbgbma.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Modern & Contemporary Carpet",
  },
   {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755006346/WhatsApp_Image_2025-08-06_at_15.02.22_aeb38be4_urprcw.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Modern & Contemporary Carpet",
  },
   {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755006347/WhatsApp_Image_2025-08-06_at_15.02.22_30738394_vsptrq.jpg",
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



const [emblaRef, embla] = useEmblaCarousel({ loop: true });


  const filteredItems = useMemo(
    () => carpet_items.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryData = useMemo(
    () => categories.find((cat) => cat.name === activeCategory),
    [activeCategory]
  );

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
            Discover timeless elegance with our curated collection of handcrafted carpets —
            where tradition meets artistry underfoot.
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

export default Carpets;
