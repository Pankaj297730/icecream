import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: <FaInstagram size={18} />, label: "Instagram", url: "https://www.instagram.com/the_.rssci?igsh=ZHo2OTEwZWlreWtm" },
  { icon: <FaFacebookF size={18} />, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61576581659607" },
  // { icon: <FaYoutube size={18} />, label: "YouTube", url: "#" },
  { icon: <FaGoogle size={18} />, label: "Google Business", url: "https://g.co/kgs/qQCQo5D " },
];

const Footer = () => {
  return (
    <footer className="bg-[#fffaf4] text-black px-6 sm:px-10 md:px-16 py-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Left Section */}
        <div className="md:flex-1 max-w-xl">
          <h2 className="text-black text-2xl sm:text-3xl font-semibold mb-2 leading-tight font-serif">
            Stay Connected with Heritage
          </h2>
          <p className="text-sm sm:text-base mb-4">
            Subscribe for updates on handmade textiles, jewelry, and authentic Rajasthani crafts.
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold uppercase mb-1">
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black placeholder-gray-400 px-4 py-2 text-sm focus:outline-none border border-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="birthday" className="text-sm font-semibold uppercase mb-1">
                Birthday*
              </label>
              <input
                id="birthday"
                type="date"
                className="bg-white text-black px-4 py-2 text-sm focus:outline-none border border-black"
                required
              />
            </div>
          </form>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 border border-black text-sm uppercase tracking-wider bg-black text-white hover:bg-white hover:text-black transition"
          >
            Subscribe
          </button>

          <p className="text-sm mt-4">
            By subscribing, you agree to receive emails about handcrafted Rajasthani products. See our{" "}
            <Link to="#" className="underline">Privacy Policy</Link> and <Link to="#" className="underline">Terms</Link>.
          </p>
          <p className="text-sm mt-1">*Required information</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-12 text-sm sm:text-base justify-between">
          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest mb-3">Showroom</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="https://www.google.com/maps?ll=26.98997,75.852402&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=10445586376022376521" className="hover:underline">Visit Amber Showroom</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest mb-3">Customer Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
              {/* <li><Link to="#" className="hover:underline">FAQ</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest mb-3">Collections</h3>
            <ul className="space-y-2 ">
           <ul>
  <li><Link to="/products#handicrafts" className="hover:underline">Handicrafts</Link></li>
  <li><Link to="/products#textiles" className="hover:underline">Textiles</Link></li>
  <li><Link to="/products#jewellery" className="hover:underline">Jewellery</Link></li>
  <li><Link to="/products#carpets" className="hover:underline">Carpets</Link></li>
  <li><Link to="/products#mojdis" className="hover:underline">Mojdis</Link></li>
  <li><Link to="/products#paintings" className="hover:underline">Paintings</Link></li>
</ul>
            </ul>
          </div>

          <div className="sm:hidden block mt-6">
            <div className="flex gap-4">
              {socialIcons.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  aria-label={item.label}
                  className="bg-black border border-black rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <span className="text-white">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-6" />

      <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">

        <div className="flex gap-4 items-center">
          <span>© 2025 Rajasthan Small Scale Cottage Industries - RSSCI</span>

    <div className="hidden sm:flex gap-3 ml-4">
  {socialIcons.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="bg-black border border-black rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition"
    >
      <span className="text-white">{item.icon}</span>
    </a>
  ))}
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
