import React, { useState, useEffect } from "react";

const textile_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Sanganeri Block Prints",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Rajasthani Necklace",
    alt: "Traditional Rajasthani necklace with colorful beads and intricate design",
    category: "Rajasthani Mirror Work",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Kundan Earrings",
    alt: "Elegant Kundan earrings with gold plating and red gemstones",
    category: "Rajasthani patel Work",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Bandhani (Tie-Dye)",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Saree’s",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799221/No_photo_available_tzguzb.jpg",
    label: "Lac Bangles",
    alt: "Brightly colored Lac bangles with traditional patterns",
    category: "Dress Material & Stiched",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_800,q_auto/v1753269110/DSC_9911_i2axzt.jpg",
    label: "Quilt Display",
    alt: "Traditional Jaipur quilt with floral patterns",
    category: "Jaipur Quits & Blankets",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,w_auto/v1753799221/No_photo_available_tzguzb.jpg",
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
    name: "Rajasthani patel Work",
    description:
      "Artistic textile craft where colorful fabric pieces are hand-stitched into bold, eye-catching patterns.",
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
  {
    name: "Dress Material & Stiched",
    description:
      "Unstitched or ready-to-wear textiles crafted in unique prints and patterns.",
  },
];

const Textiles = () => {
  const [activeCategory, setActiveCategory] = useState("Sanganeri Block Prints");
  const [TextileIndex, setTextileIndex] = useState(0);

  const filteredItems = textile_items.filter(
    (item) => item.category === activeCategory
  );

  const activeCategoryData = categories.find(
    (cat) => cat.name === activeCategory
  );

  useEffect(() => {
    setTextileIndex(0);
  }, [activeCategory]);

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
                <div className="w-full aspect-[3/1] mb-4">
                  <img
                    src={filteredItems[TextileIndex].src}
                    alt={filteredItems[TextileIndex].alt}
                    width="800"
                    height="266"
                    loading="lazy"
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
              <p className="text-center text-gray-500">
                No items in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textiles;
