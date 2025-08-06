import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_1600/v1754470955/No_photo_available_13_nqyohl.jpg",
    alt: "Artisan carved wooden stamp with Indian motifs",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1753862377/DSC_9803_g7ut3k.webp",
    alt: "Skilled Indian woman crafting traditional art",
  },
  {
    src: "https://res.cloudinary.com/dbv77rbsv/image/fetch/f_auto,q_auto,w_800/v1753606500/https://kcwvbrzhvttmzjqgaqiz.supabase.co/storage/v1/object/public/plot-images/plot-1753539347757-80519-DSC_9836.jpg",
    alt: "Skilled Indian woman crafting traditional art",
  },
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // initial selection
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col md:flex-row min-h-52 bg-[#f7f0e6] m-0 p-0">
      {/* Left Side */}
      <section className="relative flex flex-col justify-center items-start w-full md:w-1/2 bg-[#3f422d] text-white px-10 md:px-20 py-24">
        <h1 className="font-playfair font-bold text-5xl leading-[1.2] mb-8 max-w-[540px]">
          Rajasthan Small Scale Cottage Industries
        </h1>
        <p className="max-w-[420px] text-base leading-7 font-medium mb-12">
          Our Journey With Rajasthan’s master artisan spans over 35 proud years. We have built long bonds rooted in trust, tradition, and timeless craftsmanship.
          Each creation reflects the passion and precision of generations of skilled hands.
          Together, we celebrate the soul of handmade art, preserving heritage with every piece.
        </p>
        <Link to="/products">
          <button
            type="button"
            className="bg-white border border-[#3f422d] hover:bg-[#2a2c1d] hover:text-white px-6 py-3 text-black font-light text-[1rem] transition-colors rounded focus:outline-yellow-400"
          >
            Explore Products
          </button>
        </Link>

        <img
          src="https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1753861081/6bec6dc9-a7d9-4e0b-17f8-48a54174d1f1_qrhgad.webp"
          alt="Faint background image of an Indian woman crafting art"
          className="absolute inset-0 w-full h-[780px] opacity-15 pointer-events-none select-none"
          aria-hidden="true"
        />
      </section>

      {/* Right Side - Embla Carousel */}
      <section className="hidden md:flex justify-center items-center w-full md:w-1/2 bg-[#f7f0e6] py-24 overflow-hidden">
        <div className="relative w-[90%] lg:w-[550px] md:w-[600px] h-[600px] group">
          <div className="overflow-hidden h-full rounded-lg" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] w-full h-full relative"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width="500"
                    height="600"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            aria-label="Previous"
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-[#3f422d] text-3xl cursor-pointer bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 transition"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={scrollNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-[#3f422d] text-3xl cursor-pointer bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 transition"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === selectedIndex
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
