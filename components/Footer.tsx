import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gradient-gold">
              Bo&apos;s Auto Detail
            </h3>
            <p className="mt-4 text-sm text-dark-400 leading-relaxed">
              Premium auto detailing services. We bring out the best in your
              vehicle with meticulous attention to detail and luxury care.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-800 text-dark-400 transition-colors hover:bg-gold hover:text-dark-950"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-800 text-dark-400 transition-colors hover:bg-gold hover:text-dark-950"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-dark-400">
                  123 Detail Lane
                  <br />
                  Honolulu, HI 96815
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="tel:+18081234567"
                  className="text-sm text-dark-400 hover:text-gold"
                >
                  (808) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="mailto:info@bosautodetail.com"
                  className="text-sm text-dark-400 hover:text-gold"
                >
                  info@bosautodetail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Hours
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold shrink-0" />
                <div className="text-sm text-dark-400">
                  <p>Mon - Fri: 8am - 6pm</p>
                  <p>Saturday: 9am - 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800/50">
          <p className="text-center text-sm text-dark-500">
            &copy; {new Date().getFullYear()} Bo&apos;s Auto Detail. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
