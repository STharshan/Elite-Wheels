import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* BRAND */}
          <div className="flex flex-col flex-1">
            <span className="text-2xl font-bold mb-4">
              Tomas Exteriors Professional Window Tinting
            </span>

            <p className="text-[var(--muted)] leading-relaxed mb-6 max-w-sm">
              Tomas Exteriors is dedicated to enhancing vehicles and properties with premium window tinting solutions, delivering superior quality, style, and lasting protection for every customer.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-auto">
              <a href="https://www.instagram.com/window_tint911/" target="_blank" className="hover:text-[var(--gold)] transition text-2xl">
                <FaInstagram />
              </a>
              <a href="https://web.facebook.com/windowtint911?_rdc=1&_rdr#" target="_blank" className="hover:text-[var(--gold)] transition text-2xl">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* PAGES */}
          <div className="flex flex-col flex-1 md:items-center">
            <h3 className="text-lg font-semibold mb-6 text-[var(--gold)]">Pages</h3>
            <ul className="space-y-4 text-[var(--muted)] md:text-center">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/service" className="hover:text-white transition">Service</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* OPENING HOURS - NEW SECTION */}
          <div className="flex flex-col flex-1 md:items-center">
            <h3 className="text-lg font-semibold mb-6 text-[var(--gold)]">Opening Hours</h3>
            <ul className="space-y-2 text-[var(--muted)] md:text-center text-sm">
              <li>Mon - Thu: 9 AM – 10 PM</li>
              <li>Friday: 9 AM – 10 PM</li>
              <li>Saturday: 9 AM – 6 PM</li>
              <li>Sunday: 9 AM – 6 PM</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col flex-1 md:items-end items-start">
            <h3 className="text-lg font-semibold mb-6 text-[var(--gold)]">Company</h3>
            <ul className="space-y-4 text-[var(--muted)] md:text-right">
              {/* Clickable phone */}
              <li>
                <a href="tel: +447851823807" className="hover:text-white transition-colors">
                   +44 7851 823807
                </a>
              </li>

              {/* Clickable email */}
              <li>
                <a href="mailto:Tomasexteriors@gmail.com" className="hover:text-white transition-colors">
                  Tomasexteriors@gmail.com
                </a>
              </li>

              {/* Clickable address (Google Maps link) */}
              <li>
                <a
                  href="https://maps.app.goo.gl/GPi6frsETUX1cu4VA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Unit 16 Croft St, Bury<br />
                  BL9 7BG, United Kingdom
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Tomas Exteriors Professional Window Tinting. All rights reserved.
        </div>

        <div>Powered by <a href="https://www.ansely.co.uk/" className="hover:underline hover:text-[var(--gold)]">Ansely</a></div>

        <div className="flex gap-6">
          <a href="/privacy-policy" className="underline hover:text-white transition">Privacy Policy</a>
          <a href="/terms-conditions" className="underline hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
