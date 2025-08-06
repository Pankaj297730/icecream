import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const carouselImages = [
  "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799859/No_photo_available_5_yqhi6u.jpg",
];

const sec2_carouselImages = [
  "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799859/No_photo_available_5_yqhi6u.jpg",
  "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753798930/Untitled_design_accnst.jpg",
  "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753799515/No_photo_available_3_seotwk.jpg",
  "https://res.cloudinary.com/dbv77rbsv/image/fetch/v1753612287/https://kcwvbrzhvttmzjqgaqiz.supabase.co/storage/v1/object/public/plot-images/plot-1753611728349-57225-DSC_9921.JPG",
  "https://res.cloudinary.com/dbv77rbsv/image/upload/v1753440303/Untitled_design_17_mvylmy.webp",
];
const Aboutus = () => {
  // const [current, setCurrent] = useState(0);
  const [sec2_current, setsec_2Current] = useState(0);




    useEffect(() => {
    const interval = setInterval(() => {
      setsec_2Current((prev) => (prev + 1) %  sec2_carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 

  return (
    <div>
      <Navbar />

      <section className="relative bg-[#f7f0e6] py-16 px-6 md:px-20 text-black font-quicksand overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 sm:gap-40">
          {/* Left Content */}
          <div className="md:w-1/2 max-w-2xl text-left">
            <p className="text-base mb-2 uppercase tracking-wide">About Us</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6 md:leading-snug">
              Rajasthani Small Scale <br /> Cottage Industries
            </h1>
            <p className="text-lg leading-relaxed">
              Welcome to Rajasthani Small Scale Cottage Industries — where tradition meets craftsmanship.
              We are dedicated to preserving the soul of Indian artisanship by bringing you handmade treasures crafted by rural hands.
              <br /><br />
              From vibrant handwoven textiles and gemstone-studded jewellery to time-honored crafts in clay, wood, and metal — each piece reflects Rajasthan’s enduring beauty and cultural depth.
              <br /><br />
              Our mission is to deliver stories of heritage and hope from the golden sands of Rajasthan to your home.
            </p>
          </div>

          {/* Right Carousel */}
          {/* <div className="md:w-1/2 w-full"> */}
<div className="flex-1 flex flex-col w-full max-w-[500px] h-[380px] rounded-md bg-black overflow-hidden shadow-lg animate-fade-in">
  <img
    src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1754470800/DSC_9643_c7vvd4.jpg"
    alt="Interior of the showroom"
    className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-105"
  />
</div>

          </div>
        {/* </div> */}
      </section>

      
      <section className="bg-[#DBD3C785] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-24 lg:gap-80">
        {/* Left Content */}
        <div className="flex-1 max-w-4xl text-[#1c1c1c]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-12 mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-[#1c1c1c] lg:leading-snug">
              What We Offer
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-6 text-lg">
            <div>
              <ul>
                <a href="/products#handicrafts">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Handicrafts
                  </li>
                </a>
                <a href="/products#textiles">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Textiles
                  </li>
                </a>
                <a href="/products#jewellery">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Jewellery
                  </li>
                </a>
              </ul>
            </div>

            <div>
              <ul>
                <a href="/products#carpets">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Carpets
                  </li>
                </a>
                <a href="/products#paintings">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Paintings
                  </li>
                </a>
                <a href="/products#mojdis">
                  <li className="border-b border-[#d6c9b5] py-3 hover:font-semibold hover:pl-1 transition-all duration-200 ease-in-out cursor-pointer">
                    Mojdis
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col  w-[360px] h-[380px] items-center lg:items-start text-center lg:text-left animate-fade-in">
           <img
                src={sec2_carouselImages[sec2_current]}
                alt={`Slide ${sec2_current + 1}`}
                className="w-full h-full object-cover rounded"
              />
          
        </div>
      </div>
    </section>
      <Footer/>
    </div>
  );
};

export default Aboutus;
