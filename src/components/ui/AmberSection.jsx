
const AmberSection = () => {
  return (
    <div>
      <div className="relative overflow-x-hidden font-[Merriweather] bg-[#dbdcc6]">
        {/* Top Scallop */}

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 lg:pt-28 pb-16">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-44">
            {/* Left Column */}
            <div className="md:w-1/2 max-w-lg">
              <h1 className="text-4xl md:text-5xl leading-tight text-[#1a1a1a] mb-3 font-[Great_Vibes]">
                Echoes of Amber,
                <br /> Handcrafted with Pride
              </h1>
              <div className=" mb-6">
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
              <p className="text-[#2a2a2a] text-base md:text-lg leading-relaxed max-w-2xl">
                Nestled in the historic town of Amber, Jaipur, Rajasthan Small
                Scale Cottage Industries carries forward a timeless tradition of
                handcrafted excellence. Rooted in royal legacy and nurtured by
                skilled local artisans.
              </p>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-xl aspect-video bg-[#191919] rounded-sm shadow-md flex items-center justify-center cursor-pointer">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-sm"
                  src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1748506742/180_600_Indian_Handicrafts_Stock_Photos_Pictures_Royalty-Free_Images_-_iStock_drwlqy.jpg"
                  alt="Black video placeholder"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default AmberSection;
