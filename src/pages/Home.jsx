import GlimpseSection from "@/components/ui/GlimpseSection";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";

import { FaArrowUp } from "react-icons/fa";



import LegacySection from "@/components/ui/LegacySection";
import AmberSection from "@/components/ui/AmberSection";
import Explorecraft from "@/components/ui/Explorecraft";
import BulkOrder from "@/components/Bulkorder";
import Collections from "@/components/ui/Collections";



const Home = () => {
  return (
    <div className="bg-[#f9f2ea]">
      <Navbar />
      <HeroSection />
      <AmberSection/>
      <LegacySection/>
      <Explorecraft/>
      <BulkOrder/>
           <Collections />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-6 z-50 w-12 h-12 bg-black text-white rounded-full shadow-md flex flex-col items-center justify-center gap-0.5 group"
      >
        <FaArrowUp className="text-lg h-8 mt-1" />
      </button>
    </div>
  );
};

export default Home;
