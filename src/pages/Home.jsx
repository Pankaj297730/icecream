import Navbar from '@/components/ui/Navbar';
import React from 'react';

const Home = () => {
  return (
    <div className='bg-[#f7efe0]'>
        <Navbar />
    <section className="max-w-[90rem] mx-auto px-6 py-12 relative overflow-hidden bg-[#f7efe0]" style={{
      backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0Z' fill='%23f7efe0'/%3e%3cpath d='M20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4Z' fill='%23f7efe0'/%3e%3cpath d='M20 8C14.4772 8 10 12.4772 10 18C10 23.5228 14.4772 28 20 28C25.5228 28 30 23.5228 30 18C30 12.4772 25.5228 8 20 8Z' fill='%23f7efe0'/%3e%3c/svg%3e")`,
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      fontFamily: "'Merriweather', serif"
    }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto md:mx-0">
        {[
          {
            alt: "Wooden box with camel painting on top placed on a white marble table",
            src: "https://storage.googleapis.com/a1aa/image/8aa64e47-f8a3-4e2c-3560-fe1dea221db9.jpg"
          },
          {
            alt: "Square decorative box with colorful peacock design on a white marble table",
            src: "https://storage.googleapis.com/a1aa/image/f6d93729-906b-4bef-2f9b-12b4a15c9e55.jpg"
          },
          {
            alt: "Traditional wooden statue of a man wearing a turban standing on a white marble table",
            src: "https://storage.googleapis.com/a1aa/image/97610ccb-8e04-4f5e-f365-ffd85199e85f.jpg"
          },
          {
            alt: "Rectangular decorative tray with intricate patterns placed on a white marble table",
            src: "https://storage.googleapis.com/a1aa/image/0ea61435-df4a-448c-56b1-9da3ab77cc90.jpg"
          }
        ].map((img, i) => (
          <img
            key={i}
            alt={img.alt}
            src={img.src}
            width="320"
            height="320"
            className="w-full object-cover"
          />
        ))}
      </div>

      <div className="mt-10 md:mt-0 md:absolute md:top-1/2 md:right-12 md:-translate-y-1/2 max-w-2xl text-center md:text-right">
        <h1 className="font-serif text-4xl md:text-5xl text-black mb-3" style={{ letterSpacing: '0.01em' }}>
          Rajasthan Small Scale Cottage Industries
        </h1>

        <div className="flex justify-center md:justify-end mb-6">
          <svg aria-hidden="true" width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10H110M60 10L55 5M60 10L65 5M60 10L55 15M60 10L65 15"
              stroke="#d48806"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
                  </div>

        <p className="text-xl md:text-xl text-black font-serif mb-1">
          Experience a legacy that blends artistry
        </p>
        <p className="text-lg md:text-xl text-black font-serif mb-8">
          with innovation, delivered with unmatched quality.
        </p>

        <button
          aria-label="Explore Collection"
          className="bg-[#bf7500] hover:bg-[#a05f00] text-white font-bold text-lg md:text-base py-4 px-8 rounded-md transition-colors inline-flex items-center gap-2"
        >
          EXPLORE COLLECTION
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
     
    </section>
    </div>
  );
};

export default Home;
