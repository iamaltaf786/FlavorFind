import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo or App Name */}
          <div className="text-xl font-semibold mb-4 md:mb-0">
            🍽️ FoodieFlavor
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FoodieFlavor. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
