import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About Us", "Products", "Contact Us"];

  return (
    <header className="bg-[#f9f2ea] text-black font-quicksand shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-0 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1748505666/RSSCI_Logo_Final_blacl-03_1_h5h08x.png"
            alt="RSSCI Logo"
            className="h-20 w-auto object-contain"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wide">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative text-black transition-all duration-300 hover:text-[#bf7500] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#bf7500] after:transition-all after:duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-6 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 py-4 text-sm font-medium uppercase tracking-wide">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`transition duration-300 transform ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              } delay-${index * 100}`}
            >
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-2 border-b border-gray-200 hover:text-[#bf7500]"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
