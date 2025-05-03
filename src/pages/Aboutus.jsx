import React from 'react';

const ImageTextSection = ({ imageSrc, bgColor, title, subtitle, text, reverse }) => (
  <div className={`max-w-7xl w-full flex flex-col mt-16 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-stretch justify-center md:justify-between gap-10 md:gap-0`}>
    <div className="relative flex-shrink-0">
      <div className={`absolute -top-20 ${reverse ? '-right-20' : '-left-20'} w-[480px] h-[480px] ${bgColor} z-0`} />
      <img
        src={imageSrc}
        alt="About section visual"
        className="rounded-md max-w-[600px] w-full object-cover relative z-10"
        width="600"
        height="480"
      />
    </div>

    <div className="max-w-xl text-center md:text-left mt-4">
      <p className="text-xs text-gray-700 font-semibold mb-2">{subtitle}</p>
      <h2 className="text-3xl font-semibold mb-4 leading-tight">{title}</h2>
      <p className="italic text-gray-900 leading-relaxed">{text}</p>
    </div>
  </div>
);

const Aboutus = () => {
  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center justify-center gap-20 mt-0 w-full px-4 md:px-0">
     <div className="relative w-full">
  <img
    src="https://minus30.co/cdn/shop/files/M30-AboutUs-MainBanner.png?v=1678870844&width=2000"
    alt="Main About Us Banner"
    className="w-full object-cover"
  />
  <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white font-bold text-4xl md:text-6xl uppercase z-10">
    OUR STORY
  </div>
</div>

      <ImageTextSection
        imageSrc="https://storage.googleapis.com/a1aa/image/2b399080-6389-4d7e-5483-c56630ce089c.jpg"
        bgColor="bg-pink-400"
        subtitle="OUR FOUNDATIONAL INGREDIENTS"
        title="THE FACES BEHIND THE BRAND"
        text="Gayatri, a graduate of LSE and a career in marketing and branding, along with Shivanie, a graduate from The University of Nottingham and a career in project and cost management are the faces behind the brand. With Shivanie being the more health-conscious out of the two, and Gayatri enjoying indulging once in a while, they started with a vision to provide people with guilt-free indulgence without any compromise on flavour and taste."
        reverse={false}
      />

      <ImageTextSection
        imageSrc="https://storage.googleapis.com/a1aa/image/2b399080-6389-4d7e-5483-c56630ce089c.jpg"
        bgColor="bg-yellow-300"
        subtitle="OUR SECOND CHAPTER"
        title="A BALANCE OF FLAVOUR & FITNESS"
        text="Together, Gayatri and Shivanie built a brand rooted in the belief that indulgence and health can go hand in hand. Their approach blends premium ingredients with a no-compromise policy on flavour — redefining what it means to snack smart. From sourcing the finest natural ingredients to crafting recipes that are both nourishing and delicious, every decision is guided by their commitment to quality."
        reverse={true}
      />

      {/* What Makes Us Different Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4">
    WHAT MAKES US DIFFERENT
  </h2>
  <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-10">
    Gayatri &amp; Shivanie were inspired by the need for healthy gelatos that
    can be a part of everyday life. Not only did they introduce vegan and
    sugar-free flavours, but also ensured to make their regular flavours with
    30% less sugar than what you would find in the market today. Not to
    mention the all-natural ingredients to ensure freshness in every bite.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
    
    {/* What's Your Flavour */}
    <div>
      <img
        src="https://minus30.co/cdn/shop/files/M30-AboutUs-tiles-3_400x.png?v=1678871446" // Update with correct image URL
        alt="What's Your Flavour?"
        className="rounded-lg mx-auto"
        width="300"
        height="300"
      />
      <h3 className="mt-4 font-semibold text-sm md:text-base">“WHAT’S YOUR FLAVOUR?”</h3>
      <p className="mt-2 italic text-xs md:text-sm max-w-xs mx-auto leading-relaxed">
        Let your cravings guide you—explore a wide range of exciting and ever-evolving flavour options.
      </p>
    </div>

    {/* Mix Your Magic Scoop */}
    <div>
      <img
        src="https://minus30.co/cdn/shop/files/M30-AboutUs-tiles-1_400x.png?v=1678871402" // Update with correct image URL
        alt="Mix Your Magic Scoop"
        className="rounded-lg mx-auto"
        width="300"
        height="300"
      />
      <h3 className="mt-4 font-semibold text-sm md:text-base">MIX YOUR MAGIC SCOOP</h3>
      <p className="mt-2 italic text-xs md:text-sm max-w-xs mx-auto leading-relaxed">
        Customize your own dreamy scoop with a combination of textures, mix-ins and toppings!
      </p>
    </div>

    {/* DIY Make Your Own Ice Cream Kit */}
    <div>
      <img
        src="https://minus30.co/cdn/shop/files/M30-AboutUs-tiles-2_400x.png?v=1678871433" // Update with correct image URL
        alt="DIY Make Your Own Ice Cream Kit"
        className="rounded-lg mx-auto"
        width="300"
        height="300"
      />
      <h3 className="mt-4 font-semibold text-sm md:text-base">DIY “MAKE YOUR OWN ICE CREAM” KIT</h3>
      <p className="mt-2 italic text-xs md:text-sm max-w-xs mx-auto leading-relaxed">
        A fun-filled kit that brings the joy of crafting your own creamy gelato experience right at home.
      </p>
    </div>
  </div>
</section>
      <img
        src="https://minus30.co/cdn/shop/files/M30-AboutUs-BottomBanner.png?v=1678871985&width=2000"
        alt="About Us Bottom Banner"
        className="w-full object-cover"
      />
    </div>
  );
};

export default Aboutus;
