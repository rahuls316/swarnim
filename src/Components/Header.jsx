import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react'; // Optional: Lucide icons for menu toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 bg-white">
      <div className="flex items-center justify-between p-4 md:px-10">
        <div>
          <img
            className="h-[60px]"
            src="https://www.gangarealty.com/swarnim/images/logo.svg"
            alt="Logo"
          />
        </div>

        {/* Toggle Button (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-black font-semibold text-sm">
          <li><Link to={"/"}>OVERVIEW</Link></li>
          <li><Link to={"/"}>OUR PROJECTS</Link></li>
          <li><Link to={"/"}>LOCATION</Link></li>
          <li><Link to={"/"}>AMENITIES</Link></li>
          <li><Link to={"/"}>FLOOR PLANE</Link></li>
          <li><Link to={"/"}>DOWNLOAD BROCHURE</Link></li>
          <li>
            <button className="bg-black text-white px-4 py-1 rounded">
              ENQUIRY NOW
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-white text-black flex flex-col gap-3 px-4 py-4 text-sm font-medium">
          <li><Link to={"/"} onClick={() => setIsOpen(false)}>OVERVIEW</Link></li>
          <li><Link to={"/"} onClick={() => setIsOpen(false)}>OUR PROJECTS</Link></li>
          <li><Link to={"/"} onClick={() => setIsOpen(false)}>LOCATION</Link></li>
          <li><Link to={"/"} onClick={() => setIsOpen(false)}>AMENITIES</Link></li>
          <li><Link to={"/"} onClick={() => setIsOpen(false)}>FLOOR PLANE</Link></li>
          <li><Link to={"/"} onClick={() => setIsOpen(false)}>DOWNLOAD BROCHURE</Link></li>
          <li>
            <button className="bg-black text-white px-4 py-2 w-full text-left">
              ENQUIRY NOW
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
