import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const hotelPartners = [
  {
    logo: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1748505875/shangri-la-hotel-logo-transparent-png-7_x5v0sr.png",
  },
  {
    logo: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1748505874/262-2621445_taj-hotel-logo-png_sgpdqs.png",
  },
  {
    logo: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1748505874/sheraton-logo-png-hotels--resorts-logos-6_osafjy.png",
  },
  {
    logo: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1748505874/marriott-logo-png-marriott-hotels-amp-resorts-logo-png-transparent-amp-svg-vector-2400x2400_towu02.png",
  },
  {
    logo: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1748505874/Hyatt-Hotels-Logo-2013-present_sgidbq.png",
  },
];

const GlimpseSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 animate-fade-in">
      {/* Title & Subtitle */}
      <div className="max-w-full mx-auto text-center mb-6">
        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-[#1c1c1c] lg:leading-snug mb-4">
          Trusted by Leading Hotels
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          RSSCI showroom proudly serves top-tier hotels with our premium
          services and handcrafted products.
        </p>
        <div className="flex justify-center mt-6">
         
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto mb-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          speed={800}
        >
          {hotelPartners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-in-out hover:scale-105">
                <img
                  src={partner.logo}
                  alt={`Hotel Partner ${index + 1}`}
                  className="w-full h-28 object-contain"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GlimpseSection;
