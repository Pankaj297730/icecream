import React, { useState, useEffect, useMemo, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
const textile_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754467725/DSC_0083_oqcsxb.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Sanganeri Block Prints",
  },
    {
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755013596/DSC_0073_yebvy2.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Sanganeri Block Prints",
  },
      {
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755013616/DSC_0092_dmabdr.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Sanganeri Block Prints",
  },
      {
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755013614/DSC_0096_vbjned.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Sanganeri Block Prints",
  },
  

  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754467704/DSC_0075_1_qywojk.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Rajasthani Mirror Work",
  },
  

  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755014059/DSC_0081_rttrkm.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Bandhani (Tie-Dye)",
  },
    {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755014082/DSC_0124_fzafud.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Bandhani (Tie-Dye)",
  },
   {
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755014077/DSC_0079_ogfwxd.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Bandhani (Tie-Dye)",
  },

  
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754469694/No_photo_available_dcyrqx.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Saree’s",
  },
    {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755013634/DSC_0131_weemfn.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Saree’s",
  },

  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1753269110/DSC_9911_i2axzt.jpg",
    label: "Quilt Display",
    alt: "Traditional Jaipur quilt with floral patterns",
    category: "Jaipur Quits & Blankets",
  },
  
  {
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755014751/DSC_9921_cgmhb0.jpg",
    label: "Quilt Display",
    alt: "Traditional Jaipur quilt with floral patterns",
    category: "Jaipur Quits & Blankets",
  },

  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754467736/DSC_0126_qggepl.jpg",
    label: "Lehariya Fabric",
    alt: "Wave patterned Lehariya fabric with vibrant rainbow colors",
    category: "Lehariya",
  },
];


const categories = [
  {
    name: "Sanganeri Block Prints",
    description: "Delicate floral motifs hand-blocked with natural dyes on soft cottons.",
  },
  {
    name: "Rajasthani Mirror Work",
    description:
      "Traditional embroidery style with small mirrors stitched into vibrant fabrics to reflect light and add sparkle.",
  },
  {
    name: "Bandhani (Tie-Dye)",
    description: "Dotted designs with bright colors — each piece tied and dyed by hand.",
  },
  {
    name: "Saree’s",
    description:
      "Graceful drapes showcasing India's textile artistry and rich cultural heritage.",
  },
  {
    name: "Lehariya",
    description:
      "Wave-patterned fabrics dyed in rainbow tones — perfect for festive occasions.",
  },
  {
    name: "Jaipur Quits & Blankets",
    description:
      "Lightweight yet warm, filled with comfort and wrapped in traditional Rajasthani style.",
  },
 
];

const Textiles = () => {
  const [activeCategory, setActiveCategory] = useState("Sanganeri Block Prints");
  const [TextileIndex, setTextileIndex] = useState(0);



  useEffect(() => {
    setTextileIndex(0);
  }, [activeCategory]);
  
    useEffect(() => {
    textile_items.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);
  
  
  
  
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  
  
    const filteredItems = useMemo(
      () => textile_items.filter((item) => item.category === activeCategory),
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
            Textile Collection
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Experience the rich heritage of craftsmanship with our exquisite
            collection of handcrafted textiles — where every thread tells a
            story of tradition, culture, and timeless beauty.
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

export default Textiles;
