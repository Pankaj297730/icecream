import React, { useState, useEffect, useMemo, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const painting_items = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754028382/No_photo_available_3_zhvtwv.jpg",
    label: "Miniature & Traditional Art 1",
    alt: "Miniature painting showcasing royal court scenes",
    category: "Miniature & Traditional Art",
  },
      {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755007877/No_photo_available_17_q5hmm2.jpg",
    label: "Miniature & Traditional Art 2",
    alt: "Traditional Rajasthani art with nature elements",
    category: "Miniature & Traditional Art",
  },
    {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754475213/3789043-HSC00001-7_hbvrst.jpg",
    label: "Miniature & Traditional Art 2",
    alt: "Traditional Rajasthani art with nature elements",
    category: "Miniature & Traditional Art",
  },
         {
    src: "  https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755010595/DSC_9844_gghqb1.jpg",
    label: "Miniature & Traditional Art 2",
    alt: "Traditional Rajasthani art with nature elements",
    category: "Miniature & Traditional Art",
  },
       {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755007879/No_photo_available_16_qjmrnh.jpg",
    label: "Miniature & Traditional Art 2",
    alt: "Traditional Rajasthani art with nature elements",
    category: "Miniature & Traditional Art",
  },



  {
    src: " https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1755007878/No_photo_available_19_ytxjtv.jpg",
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

  const filteredItems = useMemo(
    () => painting_items.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryData = useMemo(
    () => categories.find((cat) => cat.name === activeCategory),
    [activeCategory]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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
              <div className="relative w-full h-full overflow-hidden rounded-lg" ref={emblaRef}>
                <div className="flex">
                  {filteredItems.map((item, index) => (
                    <div
                      className="flex-none min-w-full h-[220px]  sm:h-[350px] px-2"
                      key={index}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        width="800"
                         height="400"
                        className="w-full h-full object-cover rounded-md shadow transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Embla Controls */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={scrollPrev}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#3f4333] text-white p-2 rounded-full z-10"
                      aria-label="Previous painting"
                    >
                      ‹
                    </button>
                    <button
                      onClick={scrollNext}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#3f4333] text-white p-2 rounded-full z-10"
                      aria-label="Next painting"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Info Box */}
              {activeCategoryData && (
                <div className="w-full bg-[#f7f0e3] text-[#3f4333] p-4 rounded-lg shadow mt-4">
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
