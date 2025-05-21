import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Products', 'Gallery', 'Contact'];

  return (
    <nav className="bg-[#fffaf0] text-black font-serif">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide font-serif">
          <a href="/">The RSSCI</a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium text-[0.9rem] uppercase tracking-wide">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-black transition-all duration-300 hover:text-[#bf7500] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#bf7500] after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } px-6`}
      >
        <ul className="flex flex-col gap-3 py-4 text-sm font-medium uppercase tracking-wide">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`transition-opacity transform duration-300 delay-${index * 75} ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-1 border-b border-white/20 hover:text-[#bf7500]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
