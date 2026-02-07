import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bo's Auto Detail | Premium Vehicle Detailing Honolulu",
  description:
    "Luxury auto detailing services in Honolulu since 1991. Ceramic coating, paint correction, interior detailing. Located at Mark's Garage, Chinatown. BBB A+ Rated.",
  keywords: [
    "auto detailing Honolulu",
    "car detailing Hawaii",
    "luxury detailing",
    "ceramic coating Honolulu",
    "paint correction",
    "interior detailing",
    "Mark's Garage",
    "Chinatown auto detail",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Local Business SEO (static, safe content)
  const structuredDataJSON = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://www.bosautodetail.com",
    name: "Bo's Auto Detail",
    description:
      "Premium auto detailing services in Honolulu. Specializing in ceramic coating, paint correction, and luxury vehicle care.",
    url: "https://www.bosautodetail.com",
    telephone: "+1-808-782-1526",
    email: "bosautodetail@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1142 Bethel St",
      addressLocality: "Honolulu",
      addressRegion: "HI",
      postalCode: "96813",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.3107",
      longitude: "-157.8632",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Honolulu",
    },
    hasMap:
      "https://www.google.com/maps/dir//1142+Bethel+St,+Honolulu,+HI+96813",
    logo: "https://www.bosautodetail.com/logo.png",
    image: "https://www.bosautodetail.com/og-image.jpg",
    foundingDate: "1991",
    slogan: "34 Years of Excellence in Auto Detailing",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
    },
  });

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PJM0QYSTYB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PJM0QYSTYB');
          `}
        </Script>

        {/* Structured Data for SEO - static, safe content */}
        <Script id="structured-data" type="application/ld+json">
          {structuredDataJSON}
        </Script>
      </head>
      <body className="min-h-screen bg-dark-950 text-dark-50 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
