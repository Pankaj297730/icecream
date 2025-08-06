import Carpets from '@/components/Carpets';
import Handicrafts from '@/components/Handicrafts';
import Jewellery from '@/components/jewellery';
import Mojdis from '@/components/Mojdis';
import Paintings from '@/components/Paintings';
import Textiles from '@/components/Textiles';
import Navbar from '@/components/ui/Navbar';
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
 

  // const intervalRef = useRef(null);
    const intervalRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="text-white relative bg-[url('https://res.cloudinary.com/dbv77rbsv/image/upload/f_auto,q_auto,w_800/v1754475752/abstract-background-design-hd-dark-spring-green-color_851755-36184-_1__lhtfyd.webp')] bg-blend-overlay bg-cover px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase mb-2 tracking-wide text-[#e2dbc8]">Shop By Products</p>
            <h1 className="font-playfair font-bold text-5xl font-serif leading-[1.2] max-w-md">
              Explore different varieties of products at <span className="font-semibold">R.S.S.C.I</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end max-w-md h-full space-y-4">
            <hr className="border-t border-gray-400" />
            <p className="max-w-[420px] text-base leading-7 font-medium text-[#f5f0e6]">
              R.S.S.C.I is dedicated to promoting the rich legacy of Rajasthan’s small-scale and cottage industries.
              We aim to provide a platform for local artisans and entrepreneurs to showcase their unique, handmade,
              and regionally inspired products — supporting rural livelihoods and preserving traditional skills.
            </p>
          </div>
        </div>
      </div>

      {/* Product Sections with IDs for scroll targets */}
      <div id="jewellery">
        <Jewellery />
      </div>

      <div id="carpets">
        <Carpets />
      </div>

      <div id="textiles">
        <Textiles />
      </div>

      <div id="paintings">
        <Paintings />
      </div>

      <div id="handicrafts">
        <Handicrafts />
      </div>

      <div id="mojdis">
        <Mojdis />
      </div>
    </div>
  );
};

export default ProductPage;
