import { Handshake } from "lucide-react";
import {
  Landmark,
   Paintbrush,
  Leaf,
  Globe,
  BadgeCheck,
} from "lucide-react";

const LegacySection = () => {
  return (
    <div>
        <section className="bg-[#f9f2ea] pt-16 px-4 md:px-8 text-black ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-black font-serif mb-4">
            A Legacy of Craftsmanship
          </h2>
          <div className="flex justify-center mb-6">
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
          <p className="text-black text-base md:text-lg leading-relaxed">
            Rajasthan, the land of royals and vibrant colors, has always been
            known for its intricate and soulful handicrafts. From carved wooden
            furniture and block-printed textiles to marble sculptures and blue
            pottery, every piece reflects the history and spirit of the desert
            state. Our artisans carry forward these ancient traditions passed
            down through generations— each product tells a story of culture,
            passion, and precision.
          </p>
        </div>

        <div className="mt-20 bg-[#fff3e0] border border-[#3f422d] rounded-3xl py-10 px-6 md:px-16 max-w-6xl mx-auto">
          {/* <h2 className=" justify-center text-center text-2xl md:text-3xl font-serif text-[#2a1a00] mb-2">Key Milestones</h2> */}

          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-4xl font-bold text-black mb-4 font-serif">
              What Makes Us Special
            </h2>
            <div className="flex justify-center mb-6">
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left font-serif">
              <div className="flex items-start gap-4">
                <Paintbrush className="w-8 h-8 text-black" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Authentic Craftsmanship
                  </h3>
                  <p className="text-sm">
                    Handmade by artisans in Amber, Jaipur—each piece preserves
                    tradition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Handshake className="w-8 h-8 text-black" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Empowering Communities
                  </h3>
                  <p className="text-sm">
                    Supporting rural livelihoods and promoting fair trade
                    craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Landmark className="w-8 h-8 text-black" />
                <div>
                  <h3 className="text-lg font-semibold">Rooted in Heritage</h3>
                  <p className="text-sm">
                    Designs inspired by royal palaces and age-old Rajasthani
                    traditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Leaf className="w-8 h-8 text-black" />
                <div>
                  <h3 className="text-lg font-semibold">Eco-Friendly</h3>
                  <p className="text-sm">
                    Sustainable materials and natural dyes with minimal
                    environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-black" />
                <div>
                  <h3 className="text-lg font-semibold">Global Reach</h3>
                  <p className="text-sm">
                    Serving customers in 20+ countries with our export-quality
                    products.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BadgeCheck className="w-8 h-8 text-black" />
                <div>
                  <h3 className="text-lg font-semibold">Trusted Quality</h3>
                  <p className="text-sm">
                    Each item is carefully crafted and quality-checked for
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LegacySection