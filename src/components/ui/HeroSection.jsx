import { useState, useEffect, useRef } from "react";

const images = [
  {
    src: "https://storage.googleapis.com/a1aa/image/2be393c3-3c17-4009-a2a0-e2941f9d131e.jpg",
    alt: "Handcrafted pouches and cases with traditional Indian prints",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/daf35c23-015f-4770-c769-cd63f9d1061e.jpg",
    alt: "Artisan carved wooden stamp with Indian motifs",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/6bec6dc9-a7d9-4e0b-17f8-48a54174d1f1.jpg",
    alt: "Skilled Indian woman crafting traditional art",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-52 bg-[#f7f0e6] m-0 p-0">
      {/* Left Side */}
       <section className="relative flex flex-col justify-center items-start w-full md:w-1/2 bg-[#3f422d] text-white px-10 md:px-20 py-24">
        <h1 className="font-playfair font-bold text-[3rem] leading-[1.2] mb-8 max-w-[540px]">
          Rajasthan Small Scale Cottage Industries
        </h1>
      <p className="max-w-[420px] text-[0.95rem] leading-7 font-light mb-12">
  Experience a timeless legacy where traditional Indian craftsmanship meets modern innovation. 
  At RSSCI, we celebrate the rich heritage of skilled artisans by delivering authentic, 
  handcrafted excellence with unmatched quality, purpose, and pride. 
  Every creation tells a story — rooted in culture, powered by skill, and made for the world.
</p>

        <button
          type="button"
          className="bg-white border border-[#3f422d] hover:bg-[#2a2c1d] hover:text-white px-6 py-3 text-black font-light text-[1rem] transition-colors rounded focus:outline-yellow-400"
        >
          Explore Products
        </button>
        <img
          src="https://storage.googleapis.com/a1aa/image/6bec6dc9-a7d9-4e0b-17f8-48a54174d1f1.jpg"
          alt="Faint background image of an Indian woman crafting art"
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
          aria-hidden="true"
        />
      </section>

      {/* Right Side - Carousel */}
      <section className="relative flex justify-center items-center w-full md:w-1/2 bg-[#f7f0e6] py-24 overflow-hidden">
        <div className="relative w-[90%] md:w-[500px] h-[600px] flex justify-center items-center group">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700"
          />

          {/* Carousel Controls */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 text-[#3f422d] text-3xl cursor-pointer bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 transition"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 text-[#3f422d] text-3xl cursor-pointer bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 transition"
          >
            ›
          </button>

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
      </section>
    </div>
  );
};

export default HeroSection;
