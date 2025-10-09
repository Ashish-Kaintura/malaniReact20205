import React from "react";
import { NavLink } from "react-router-dom";
// 1. Import React Icons
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info and Social Links */}
            <div className="md:col-span-2">
              {/* <h3 className="text-3xl font-extrabold font-display mb-4 gradient-text">
                Malani Marble
              </h3> */}
              <NavLink to="/">
                {" "}
                <img
                  src="https://i.postimg.cc/0ysPBwWw/New-Logo-White.png"
                  alt="logo"
                  className="sm:w-40 mb-4"
                />
              </NavLink>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Crafting timeless elegance with premium natural stone. Your
                trusted partner for luxury marble solutions since 1990.
              </p>
              <div className="flex space-x-5 mt-4">
                <NavLink
                  to="https://www.facebook.com/malanimarbles"
                  aria-label="Facebook"
                  className="text-gray-400 hover:gradient-text transition-colors duration-300"
                >
                  {/* Replaced <i> with React Icon */}
                  <FaFacebookF className="text-xl" />
                </NavLink>
                <NavLink
                  to="https://www.instagram.com/malanimarbles/"
                  aria-label="Instagram"
                  className="text-gray-400 hover:gradient-text transition-colors duration-300"
                >
                  {/* Replaced <i> with React Icon */}
                  <FaInstagram className="text-xl" />
                </NavLink>

                <NavLink
                  to="https://www.linkedin.com/company/malani-marbles/"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:gradient-text transition-colors duration-300"
                >
                  {/* Replaced <i> with React Icon */}
                  <FaLinkedinIn className="text-xl" />
                </NavLink>

                <NavLink
                  to="https://www.youtube.com/@malanimarbles6638"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:gradient-text transition-colors duration-300"
                >
                  {/* Replaced <i> with React Icon */}
                  <FaYoutube className="text-xl" />
                </NavLink>
                <NavLink
                  to="https://in.pinterest.com/malanimarbles1/"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:gradient-text transition-colors duration-300"
                >
                  {/* Replaced <i> with React Icon */}
                  <FaPinterest className="text-xl" />
                </NavLink>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <NavLink to="/" className="hover:gradient-text transition-colors duration-300">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="hover:gradient-text transition-colors duration-300">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="hover:gradient-text transition-colors duration-300">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy" className="hover:gradient-text transition-colors duration-300">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:gradient-text transition-colors duration-300">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Collection Links */}
            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Collection</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <NavLink to="/marble-collection" className="hover:gradient-text transition-colors duration-300">
                    Marble Collection
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/slimtech-tiles-collections" className="hover:gradient-text transition-colors duration-300">
                    Tiles Collection
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-800 pt-8 mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              {/* Copyright Info */}
              <p className="text-sm text-gray-400 mb-2 sm:mb-0">
                © {new Date().getFullYear()} Malani Marble. All rights reserved. |
                <span className="text-gray-300 ml-2">
                  Crafted with <span className="text-red-500">❤️</span> for Premium Stone Solutions
                </span>
              </p>

              {/* 2. Developed by Risezonic */}
              <p className="text-xs text-gray-500">
                Developed and Designed by <a href="https://risezonic.com" target="_blank" rel="noopener noreferrer" className="gradient-text hover:text-emerald-300 font-medium transition-colors duration-300">Risezonic</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}