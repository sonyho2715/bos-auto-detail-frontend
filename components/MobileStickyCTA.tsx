"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky CTA after user scrolls 300px
      if (window.scrollY > 300) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render on desktop (>= 768px)
  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && hasScrolled && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-dark-950/95 backdrop-blur-md border-t border-dark-800 shadow-2xl">
            <div className="px-4 py-3">
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 p-1 text-dark-500 hover:text-dark-300 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-xs text-dark-400 mb-3 pr-6">
                Ready to transform your vehicle?
              </p>

              <div className="flex gap-3">
                <a
                  href="tel:+18087821526"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-dark-950 transition-all active:scale-95"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="sms:+18087821526"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Text Us
                </a>
              </div>

              <p className="text-xs text-center text-dark-500 mt-2">
                (808) 782-1526 • No appointment needed for estimates
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
