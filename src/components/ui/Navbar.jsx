import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: You can also use SVGs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Products', 'Gallery', 'Contact'];

  return (
    <nav className="bg-[#fffaf0] text-black font-serif ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide font-serif">
          <a href="/">The RSSCI</a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium text-sm uppercase tracking-wide">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#ffe8c6] transition-colors duration-200"
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
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3 text-sm font-medium uppercase tracking-wide">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-1 border-b border-white/20 hover:text-[#ffe8c6]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
