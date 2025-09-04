import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <h3 className="text-3xl font-bold font-display mb-4">
                Malani Marble
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Crafting timeless elegance with premium natural stone. Your
                trusted partner for luxury marble solutions since 1990.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Collection</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Marble Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tiles Collection
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Malani Marble. All rights reserved. |
              <span className="text-gray-300">
                Crafted with ❤️ for Premium Stone Solutions
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
