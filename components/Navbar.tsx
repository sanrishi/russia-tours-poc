"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-gold">SVETA</span>
          <span className="text-white/70 font-normal"> | Signature Russia</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#tours"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Signature Tours
          </a>
          <a
            href="#destinations"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Destinations
          </a>
          <a
            href="#stories"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            The Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-charcoal font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-gold/20"
          >
            <Phone size={14} />
            Plan Your Tour
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a
                href="#tours"
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white py-2 transition-colors"
              >
                Signature Tours
              </a>
              <a
                href="#destinations"
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white py-2 transition-colors"
              >
                Destinations
              </a>
              <a
                href="#stories"
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white py-2 transition-colors"
              >
                The Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-charcoal font-semibold text-sm px-5 py-3 rounded-full transition-all mt-2"
              >
                <Phone size={14} />
                Plan Your Tour
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
