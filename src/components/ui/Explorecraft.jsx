import React, { useEffect, useRef, useState } from "react";

const Explorecraft = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  // Trigger when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const end = 200;
    const duration = 4000; // 2 seconds total
    const increment = end / (duration / 20); // how much to increase every 20ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="text-white  relative bg-[url('https://img.freepik.com/premium-photo/abstract-background-design-hd-dark-spring-green-color_851755-36184.jpg?ga=GA1.1.1554648406.1748514457&w=740')] bg-blend-overlay bg-cover py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Left Text Content */}
        <div className="max-w-2xl text-left">
          <p className="text-base  mb-2 font-quicksand">Timeless Craft. Royal Roots.</p> 
          <h2 className=" font-serif text-4xl md:text-5xl font-semibold mb-6 md:leading-snug">
            
            Explore a wide <br />
            selection of craft forms
          </h2>

          <p className=" text-lg leading-relaxed font-quicksand">
            Discover a world of heritage and handwork at our Amber showroom. Each piece—from intricate handwoven fabrics and gemstone-studded jewelry to clay, wood, and metal crafts—tells the tale of Indian artisanship, rooted in time yet designed for today.
          </p>
          <button
          type="button"
          className="bg-white border mt-6 border-[#3f422d] hover:bg-[#2a2c1d] hover:text-white px-6 py-3 text-black font-light text-[1rem] transition-colors rounded focus:outline-yellow-400"
        >
          Explore Products
        </button>
        </div>

        {/* Right Stat Block */}
        <div className="flex flex-col items-center justify-center  text-center">
          <p className="font-playfair text-[56px] md:text-[72px] leading-none font-semibold">
            {count}
            <span className="align-super text-2xl">+</span>
          </p>
          <p className="text-sm tracking-widest uppercase font-quicksand mt-1">
            Craft Forms Preserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explorecraft;
