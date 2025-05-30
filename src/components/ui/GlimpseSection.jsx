import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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

const artworks = [
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993926/Assamese_Muga_With_Japi_20170826105955_c2oypf.jpg",
    tagline: "Handwoven Dreams in Every Thread",
  },
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993925/terracota_matnor.jpg",
    tagline: "Colors of Culture and Craft",
  },
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993925/chan_rod3cx.jpg",
    tagline: "Timeless Textiles from the Desert",
  },
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993925/terracota_matnor.jpg",
    tagline: "Jewels Forged in Heritage",
  },
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993926/handicrafts_i8bghf.avif",
    tagline: "Threads of Tradition",
  },
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993926/5ed4df6835259f5faf4152ec_1591009128683_bodk4w.jpg",
    tagline: "Every Frame Tells a Story",
  },
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993925/terracota_matnor.jpg",
    tagline: "Heritage in Every Hue",
  },
  {
    img: "https://res.cloudinary.com/dbv77rbsv/image/upload/v1747993926/Assamese_Muga_With_Japi_20170826105955_c2oypf.jpg",
    tagline: "Crafted with Soul",
  },
];

const GlimpseSection = () => {
  return (
    <section className="py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-black font-serif mb-4">
          A Glimpse Into Artistry
        </h2>
        <div className="flex justify-center mb-12">
          <svg
            aria-hidden="true"
            width="120"
            height="20"
            viewBox="0 0 120 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10H110M60 10L55 5M60 10L65 5M60 10L55 15M60 10L65 15"
              stroke="#d48806"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          speed={800}
        >
          {artworks.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center transition-transform duration-700 ease-in-out hover:scale-105 will-change-transform">
                <img
                  src={item.img}
                  alt={`Artwork ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-48 sm:h-60 md:h-72 object-cover transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <p className="mt-2 text-sm italic text-[#3b2f2f] max-w-[90%] mb-20 font-serif">
                  {item.tagline}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dot styling */}
        <style>{`
          .swiper-pagination {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #cfc5b8;
            opacity: 0.8;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease,
              opacity 0.3s ease;
            position: relative;
          }

          .swiper-pagination-bullet-active {
            background-color: #3b2f2f;
            opacity: 1;
            animation: pulse 1.6s infinite ease-in-out;
            transform: scale(1.3);
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(59, 47, 47, 0.6);
            }
            50% {
              box-shadow: 0 0 10px 6px rgba(59, 47, 47, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(59, 47, 47, 0);
            }
          }
        `}</style>
      </div>
      {/* Trusted by hotels section */}
      <div className=" pt-14 max-w-full mx-auto text-center">
        <h2 className="text-4xl font-bold text-black font-serif mb-4">
          Trusted by Leading Hotels
        </h2>
        <p className="text-lg text-gray-700 mb-4 font-serif">
          RSSCI showroom proudly serves top-tier hotels with our premium
          services and handcrafted products.
        </p>
        <div className="flex justify-center mb-12">
          <svg
            aria-hidden="true"
            width="120"
            height="20"
            viewBox="0 0 120 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10H110M60 10L55 5M60 10L65 5M60 10L55 15M60 10L65 15"
              stroke="#d48806"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
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
              <div className="flex flex-col items-center justify-center p-4 transition-transform duration-700 ease-in-out hover:scale-105">
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
