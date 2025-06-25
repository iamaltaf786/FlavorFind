import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <div className="text-2xl font-semibold mb-4">🍽️ FoodieFlavor</div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FoodieFlavor. All rights reserved.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Stories</a></li>
            <li><a href="#">Work with Us</a></li>
            <li><a href="#">User Testimonials</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">User Policy</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email Address</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Company Location</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms and Condition</a>
      </div>
    </footer>
  );
}

export default Footer;
