import { useState } from "react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

const Contactus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="bg-[#f9f2ea] text-gray-800">
        {/* Top Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-4 py-6 sm:py-8 mb-10">
          {/* Banner */}
          <div className="h-64 mb-10 sm:h-80 md:h-64 overflow-hidden relative">
            <img
              alt="Showroom Banner"
              src="https://www.artefactindia.com/image/catalog/revslider_media_folder/artefactbanner1.jpg"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="text-sm text-gray-500 uppercase">We're in Amber, Jaipur</div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black font-playfair">Visit Our Showroom</h2>

              <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-300 pb-6">
                <div className="sm:w-1/2">
                  <div className="uppercase text-xs font-semibold text-gray-600 mb-1">Opening Hours</div>
                  <p className="text-sm sm:text-base">
                    Monday to Saturday <br />
                    10:00 AM – 7:00 PM
                  </p>
                </div>
                <div className="sm:w-1/2">
                  <div className="uppercase text-xs font-semibold text-gray-600 mb-1">Address</div>
                  <p className="text-sm sm:text-base leading-snug">
                    RSSCI Showroom, Jagat Shriomani Temple Road, Amer, Jaipur, Rajasthan 302028
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-300 pb-6">
                <div className="sm:w-1/2">
                  <div className="uppercase text-xs font-semibold text-gray-600 mb-1">Email</div>
                  <p className="text-sm sm:text-base">info@rssci.com</p>
                </div>
                <div className="sm:w-1/2">
                  <div className="uppercase text-xs font-semibold text-gray-600 mb-1">Phone</div>
                  <p className="text-sm sm:text-base">+91 98290 62872</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Whether you're curious about our handmade crafts or need help with custom orders,
                  we’re happy to assist. Call us or send us an email—we’ll get back to you shortly!
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black hover:bg-gray-800 text-white uppercase text-sm font-semibold px-6 py-3 tracking-wider transition duration-300"
                >
                  Write a Message
                </button>
              </div>
            </div>

            {/* Right Content: Map */}
            <div className="md:w-1/2 w-full aspect-video">
              <iframe
                title="RSSCI Showroom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.2711210965003!2d75.84985827594328!3d26.98997205676518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db16499dcc9db%3A0x90f62d7745794049!2sRajasthan%20Small%20Scale%20Cottage%20Industry!5e0!3m2!1sen!2sin!4v1748596104502!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <h3 className="text-lg font-semibold mb-4">Send a Message</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contactus;
