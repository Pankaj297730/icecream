import React, { useState, useEffect, useRef } from "react";
import {
  Handshake,
  Landmark,
  Paintbrush,
  Leaf,
  Globe,
} from "lucide-react";

const images = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753270111/DSC_9649_labl06.jpg",
    alt: "Handcrafted pouches and cases with traditional Indian prints",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753269102/DSC_9938_kb1jev.jpg",
    alt: "Artisan carved wooden stamp with Indian motifs",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753269099/DSC_9934_tnyopt.jpg",
    alt: "Skilled Indian woman crafting traditional art",
  },
];

const legacyPoints = [
  {
    icon: Paintbrush,
    title: "Timeless Artistry",
    desc: "Each creation reflects generations of skilled artisanship, blending tradition with intricate handwork.",
  },
  {
    icon: Handshake,
    title: "Crafted with Purpose",
    desc: "Empowering local artisans through fair trade, ethical practices, and sustainable livelihoods.",
  },
  {
    icon: Landmark,
    title: "Inspired by Royalty",
    desc: "Designs echo the grandeur of Rajasthan’s palaces, forts, and age-old artistic legacy.",
  },
  {
    icon: Leaf,
    title: "Sustainably Made",
    desc: "We use natural materials, eco-friendly dyes, and mindful methods that respect the Earth.",
  },
  {
    icon: Globe,
    title: "Celebrated Worldwide",
    desc: "Our handcrafted treasures have found homes in over 25+ countries across the globe.",
  },
];

const LegacySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
  
   
  
    // Auto-carousel
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 4000); // 4 seconds
  
      return () => clearInterval(intervalRef.current);
    }, []);

  return (
  <section className="relative bg-[#f9f2ea] py-24 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-44 items-start">
        {/* Left: Text + Icons */}
        <div>
          <p className="text-base text-[#3f3f2f] mb-2 font-quicksand">The Soul of Craft</p>
         <h2 className="text-[#1c1c1c] text-4xl md:text-5xl font-serif font-semibold mb-6 md:leading-snug ">
            A Legacy of Craftsmanship
          </h2>
          <p className="text-[#111111] text-lg md:text-lg leading-relaxed font-quicksand mb-10">
           Rooted in tradition, Our Crafts breath the soulful Spirits of Rajasthan’s heritage
Every View tells a breath felt Story of skilled hands, age old cultural and artistic pride.

          </p>

          <div className="space-y-10 border-l-2 border-[#d48806] pl-8 relative">
            {legacyPoints.map((item, i) => (
              <div key={i} className="relative flex items-start gap-5 pl-4">
                <div className="absolute -left-[3rem] top-0 bg-[#d48806] rounded-full p-2">
                  <item.icon className="w-5 h-5 text-white " />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1c1c1c] font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#3f3f2f] font-quicksand">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Carousel */}
      <div className="relative w-full h-[450px] sm:h-[350px] md:h-[400px] lg:h-full flex justify-center items-center group overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover bg-center  rounded-lg shadow-md transition-all duration-700"
          />

          {/* Carousel Controls */}
         

          {/* Dots */}
          <div className="absolute bottom-4 flex space-x-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex
                    ? "bg-[#3f422d]"
                    : "bg-gray-400 opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
