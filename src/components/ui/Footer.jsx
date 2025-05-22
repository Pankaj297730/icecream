
const Footer = () => {
  return (
    <div>
        <footer className="bg-[#f7efe0] text-black px-6 sm:px-10 md:px-16 py-10 sm:py-14 max-w-full mx-auto font-serif">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        <div className="md:flex-1 max-w-lg">
          <h2 className="font-serif text-black text-3xl sm:text-4xl font-semibold mb-2 leading-tight">
            Stay Connected with Heritage
          </h2>
          <p className="text-sm sm:text-base mb-6 max-w-[480px]">
            Subscribe for updates on handmade textiles, jewelry, and authentic Rajasthani crafts.
          </p>
          <form className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-6 max-w-[480px]">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase mb-1 tracking-wider"
              >
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-white text-black placeholder-gray-400 px-4 py-3 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-40">
              <label
                htmlFor="birthday"
                className="text-xs font-semibold uppercase mb-1 tracking-wider"
              >
                Birthday*
              </label>
              <div className="relative">
                <input
                  id="birthday"
                  type="date"
                  className="bg-white text-black px-4 py-3 pr-10 focus:outline-none"
                  required
                />
                <i className="far fa-calendar-alt absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="w-full max-w-[480px] border border-black text-black uppercase text-xs tracking-widest py-4 hover:bg-white hover:text-black transition-colors"
          >
            Subscribe
          </button>
          <p className="text-xs mt-6 max-w-[480px]">
            By subscribing, you agree to receive emails about handcrafted Rajasthani products. See our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms</a>.
          </p>
          <p className="text-xs mt-2 max-w-[480px]">*Required information</p>
          <div className="flex gap-6 mt-8 max-w-[480px]">
            {["instagram", "facebook-f", "twitter", "youtube", "pinterest-p"].map((icon, index) => (
              <a
                key={index}
                href="#"
                aria-label={icon}
                className="border border-black rounded-full p-3 flex items-center justify-center w-12 h-12"
              >
                <i className={`fab fa-${icon} text-white text-lg`} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:gap-20 text-sm sm:text-base">
          <div>
            <h3 className="uppercase text-xs sm:text-sm font-semibold tracking-widest mb-4">Showroom</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Craftsmen</a></li>
              <li><a href="#" className="hover:underline">Visit Amber Showroom</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs sm:text-sm font-semibold tracking-widest mb-4">Customer Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Track Orders</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs sm:text-sm font-semibold text-black tracking-widest mb-4">Collections</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Handicrafts</a></li>
              <li><a href="#" className="hover:underline">Textiles</a></li>
              <li><a href="#" className="hover:underline">Jewelry</a></li>
              <li><a href="#" className="hover:underline">Blankets</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-800 my-8" />
      <div className="flex flex-col text-black sm:flex-row justify-between items-center text-xs sm:text-sm  gap-4 sm:gap-0">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
          <a href="#" className="hover:underline">Site Map</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
        <div className="text-black flex items-center gap-4 justify-center sm:justify-end whitespace-nowrap">
          <span>© 2025 Rajasthan Small Scale Cottage Industries - RSSCI</span>
          <a href="#" className="font-semibold uppercase tracking-widest hover:underline flex items-center gap-1">
            Back to Top <i className="fas fa-chevron-up text-xs" />
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer