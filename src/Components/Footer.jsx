import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="text-center text-2xl font-semibold tracking-wider mb-10">
        <span className="text-white">GANGA</span><br />
        <span className="text-xs tracking-widest">REALTY</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-700 px-10 py-8">
        {/* Company Section */}
        <div>
          <h3 className="font-serif text-lg mb-4 underline">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Our Story</li>
            <li>Career</li>
            <li>Grow With Us</li>
            <li>Ganga Foundation</li>
            <li>Life At Ganga</li>
          </ul>
        </div>

        {/* Insights & News */}
        <div>
          <h3 className="font-serif text-lg mb-4 underline">Insights & News</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Resources</li>
            <li>Blog</li>
            <li>Media</li>
            <li>Awards</li>
          </ul>
        </div>

        {/* Support & Policies */}
        <div>
          <h3 className="font-serif text-lg mb-4 underline">Support & Policies</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Pay Online</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Refund & Cancellation Policy</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 items-center text-sm text-gray-400 border-t border-gray-700 px-10 py-10 gap-6">
        {/* Reach Us */}
        <div>
          <h4 className="font-semibold text-white mb-2">Reach Us</h4>
          <p>Ground Floor, Tower A,<br />Vatika Tower, Sector 54,<br />Golf Course Road Gurugram, Haryana 122011</p>
        </div>

        {/* Certification */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/3YKWvLJ/great-place-badge.png"
            alt="Great Place To Work"
            className="w-28"
          />
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-2">Phone</h4>
          <p>+91-9990084084</p>
          <h4 className="font-semibold text-white mt-4 mb-2">Email</h4>
          <p>info@gangarealty.com</p>
        </div>

        {/* Legal and Socials */}
        <div className="flex flex-col items-center md:items-end">
          <p>Ganga Global Homes Pvt. Ltd.</p>
          <p>Jai Ganga Realtech LLP</p>
          <div className="flex space-x-4 mt-4 text-white">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTimes />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;