import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 font-poppins">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Title and Description */}
        <div>
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">TITLE HERE</h2>
          <p className="text-lg text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
              <FaFacebookF size={20} className="text-gray-900" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
              <FaTwitter size={20} className="text-gray-900" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
              <FaInstagram size={20} className="text-gray-900" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
              <FaLinkedinIn size={20} className="text-gray-900" />
            </a>
          </div>
        </div>

        {/* About Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">ABOUT</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/history" className="hover:text-yellow-400 transition-colors">History</a></li>
            <li><a href="/our-team" className="hover:text-yellow-400 transition-colors">Our Team</a></li>
            <li><a href="/brand-guidelines" className="hover:text-yellow-400 transition-colors">Brand Guidelines</a></li>
            <li><a href="/terms" className="hover:text-yellow-400 transition-colors">Terms & Condition</a></li>
            <li><a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">SERVICES</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/how-to-order" className="hover:text-yellow-400 transition-colors">How to Order</a></li>
            <li><a href="/our-product" className="hover:text-yellow-400 transition-colors">Our Product</a></li>
            <li><a href="/order-status" className="hover:text-yellow-400 transition-colors">Order Status</a></li>
            <li><a href="/promo" className="hover:text-yellow-400 transition-colors">Promo</a></li>
            <li><a href="/payment-method" className="hover:text-yellow-400 transition-colors">Payment Method</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">OTHER</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/contact-us" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
            <li><a href="/help" className="hover:text-yellow-400 transition-colors">Help</a></li>
            <li><a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center mt-8 text-gray-400">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Restaurant Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
