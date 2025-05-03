import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-300 text-black font-sans text-[15px] px-6 py-10 w-full mx-auto flex flex-wrap gap-y-10">
      {/* About Section */}
      <div className="flex-1 min-w-[280px] max-w-[400px]">
        <h3 className="uppercase text-[13px] font-semibold mb-4">About Our Store</h3>
        <p className="mb-6 leading-relaxed">
          Rated as one of the best{" "}
          <a className="underline" href="#">Gelato Ice Cream</a> brands in Delhi NCR. We offer a wide range of{" "}
          <a className="underline" href="#">sugar free</a>, healthy and{" "}
          <a className="underline" href="#">vegan options</a>. Handcrafted with love
        </p>
        <p className="mb-2 font-semibold">
          Manufactured, Packed and Registered Office:{" "}
          <span className="font-normal">
            C-159 Okhla, Phase 1, New Delhi 110020 Fssai Lic No. 13318010000675
          </span>
        </p>
        <p className="mb-2 font-semibold">
          Manufactured, Packed by:{" "}
          <span className="font-normal">
            Tower A Ground Floor Service Area, Rattha Tek Meadows 51, Sholinganallur Chennai, T.N-600119
          </span>
        </p>
        <p>Fssai Lic No. 12421008003821</p>
        <p className="mt-20 text-[13px]">© Minus30</p>
      </div>

      {/* Information Links */}
      <div className="flex-1 min-w-[160px] max-w-[200px] ml-9">
        <h3 className="uppercase text-[13px] font-semibold mb-4">Information</h3>
        <nav className="flex flex-col gap-3 font-normal">
          {[
            "Our Story",
            "Blog",
            "Contact Us",
            "FAQs",
            "Shipping and Returns",
            "Terms of Service",
            "Privacy Policy",
            "Refund Policy",
          ].map((item, idx) => (
            <a key={idx} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Newsletter */}
      <div className="flex-1 min-w-[280px] max-w-[320px]">
        <h3 className="uppercase text-[13px] font-semibold mb-4">Newsletter</h3>
        <p className="mb-6 leading-relaxed max-w-[280px]">
          Subscribe to our newsletter to keep up with the world of Minus 30 Gelato
        </p>
        <form className="max-w-[280px]">
          <label htmlFor="email" className="sr-only">Your e-mail</label>
          <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
            <input
              id="email"
              type="email"
              placeholder="Your e-mail"
              className="flex-grow px-4 py-3 text-[15px] text-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="px-4 py-3 text-gray-600 hover:text-black transition"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>

      {/* Social Media */}
      <div className="flex-1 min-w-[160px] max-w-[200px]">
        <h3 className="uppercase text-[13px] font-semibold mb-4">Follow Us Now</h3>
        <div className="flex border border-gray-400 rounded-xl overflow-hidden w-max">
          <a
            href="#"
            aria-label="Facebook"
            className="flex items-center justify-center w-12 h-12 text-black hover:text-gray-700 transition"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex items-center justify-center w-12 h-12 text-black border-l border-gray-400 hover:text-gray-700 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
