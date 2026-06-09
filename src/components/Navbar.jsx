import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AnimatedLink = ({ text, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="group relative overflow-hidden h-6 block"
  >
    <span className="block text-white transition-transform duration-300 group-hover:-translate-y-full">
      {text}
    </span>
    <span className="block text-[#F21B23] absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
      {text}
    </span>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Reviews", href: "/review" },
    { text: "Service", href: "/service" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Slide-in animation CSS */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-1 { animation: slideIn 0.3s ease-out 0s both; }
        .animate-slide-in-2 { animation: slideIn 0.3s ease-out 0.1s both; }
        .animate-slide-in-3 { animation: slideIn 0.3s ease-out 0.2s both; }
        .animate-slide-in-4 { animation: slideIn 0.3s ease-out 0.3s both; }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="Aquafix Logo"
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <AnimatedLink key={link.text} text={link.text} href={link.href} />
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+447851823807"
                className="px-4 xl:px-6 py-2.5 xl:py-3 border-2 border-white text-white text-sm xl:text-base rounded-full hover:bg-[#F21B23] hover:border-[#F21B23] transition-all duration-300 whitespace-nowrap"
              >
                Call +44 7851 823807
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-black z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
            <img
              src="/logo.png"
              alt="Aquafix Logo"
              className="h-12 w-auto object-contain"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.text}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-lg text-white hover:bg-white/10 hover:text-[#F21B23] rounded-lg transition-all duration-200 transform hover:translate-x-2 ${
                    isOpen ? `animate-slide-in-${index + 1}` : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="p-4 sm:p-6 border-t border-white/10 space-y-3">
            <a
              href="tel:+447851823807"
              className="block w-full px-6 py-3 bg-[#F21B23] text-white text-center rounded-full hover:bg-[#d01820] transition-all duration-300 font-medium"
            >
              Call +44 7851 823807
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full px-6 py-3 border-2 border-white text-white text-center rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;