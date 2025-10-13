import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "Why-Us", href: "/why-us" },
        { label: "Vision & Mission", href: "/our-vision-and-mission" },
        { label: "Infrastructure", href: "/infrastructure" },
        { label: "Clientele", href: "/clientele" },
      ],
    },
    {
      label: "Marble Collection",
      href: "/marble-collection",
      dropdown: [
        { label: "Beige", href: "/marble-collection/beige-marble" },
        { label: "Coloured", href: "/marble-collection/coloured-marble" },
        { label: "Onyx", href: "/marble-collection/onyx-marble" },
        { label: "Travertino", href: "/marble-collection/travertino-marble" },
        { label: "Finishes", href: "/marble-collection/finishes-marble" },
        { label: "Indian Granites", href: "/marble-collection/indian-granite" },
        { label: "Brazilian Granites", href: "/marble-collection/brazilian-granite" },
        { label: "White", href: "/marble-collection/white-marble" },
        { label: "Gray", href: "/marble-collection/gray-marble" },
        { label: "Imported Granites", href: "/marble-collection/imported-granites" },
        { label: "Semi Precious", href: "/marble-collection/semi-precious" },
      ],
    },
    {
      label: "Slimtech Tiles Collections",
      href: "/tiles-collections",
      dropdown: [
        { label: "White Tiles", href: "/tiles-collections/white-tiles"},
        { label: "Black Tiles", href: "/tiles-collections/black-tiles"},
        { label: "Gray Tiles", href: "/tiles-collections/gray-tiles" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/">
            {" "}
            <img
              src="https://i.postimg.cc/0ysPBwWw/New-Logo-White.png"
              alt="logo"
              className="w-32"
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-white">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to={item.href}
                    className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>

                  {/* Dropdown */}
                  {openDropdown === idx && (
                    <div className="absolute left-0 mt-1 bg-white text-gray-800 shadow-lg rounded-lg py-2 w-48 animate-fadeIn">
                      {item.dropdown.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.href}
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={idx}
                  to={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-black/95 text-white p-4 space-y-3">
            {navItems.map((item, idx) => (
              <div key={idx} className="space-y-2">
                {item.dropdown ? (
                  <details className="group">
                    <summary className="cursor-pointer flex justify-between items-center">
                      <NavLink
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-gray-300 flex items-center gap-1"
                      >
                        {item.label}
                      </NavLink>
                      <ChevronDown
                        size={16}
                        className="transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm hover:text-gray-300"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </details>
                ) : (
                  <NavLink
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block"
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
