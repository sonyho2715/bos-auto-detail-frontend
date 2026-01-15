"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Real gallery items with actual images
const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/6088222_orig.jpg",
    title: "Paint Polishing",
    category: "Paint Correction",
    description: "Professional machine polishing for a flawless finish",
  },
  {
    id: 2,
    src: "/images/gallery/4616347_orig.jpg",
    title: "Red Sedan Detail",
    category: "Full Detail",
    description: "Complete exterior detail with mirror-like shine",
  },
  {
    id: 3,
    src: "/images/gallery/6987270_orig.jpg",
    title: "Truck Interior",
    category: "Interior Detail",
    description: "Deep interior cleaning and conditioning",
  },
  {
    id: 4,
    src: "/images/gallery/9510212_orig.jpg",
    title: "Wheel Cleaning",
    category: "Full Detail",
    description: "High-pressure wheel and tire cleaning",
  },
  {
    id: 5,
    src: "/images/gallery/188168_orig.jpg",
    title: "Floor Mat Care",
    category: "Interior Detail",
    description: "Professional floor mat cleaning and drying",
  },
  {
    id: 6,
    src: "/images/gallery/3071327_orig.jpg",
    title: "Our Shop",
    category: "Shop",
    description: "Located at Mark&apos;s Garage in Chinatown",
  },
  {
    id: 7,
    src: "/images/gallery/img-0302_orig.jpg",
    title: "Branded Vehicle",
    category: "Shop",
    description: "Our promotional vehicle on the streets of Honolulu",
  },
  {
    id: 8,
    src: "/images/gallery/373942_orig.jpg",
    title: "Exterior Shine",
    category: "Full Detail",
    description: "Complete exterior transformation",
  },
  {
    id: 9,
    src: "/images/gallery/3836200_orig.jpg",
    title: "Detail Work",
    category: "Full Detail",
    description: "Meticulous attention to every surface",
  },
  {
    id: 10,
    src: "/images/gallery/3999169_orig.jpg",
    title: "Clean Finish",
    category: "Full Detail",
    description: "Showroom-quality results",
  },
  {
    id: 11,
    src: "/images/gallery/4722948_orig.jpg",
    title: "Interior Care",
    category: "Interior Detail",
    description: "Complete interior rejuvenation",
  },
  {
    id: 12,
    src: "/images/gallery/5837924_orig.jpg",
    title: "Premium Detail",
    category: "Full Detail",
    description: "Full service premium detailing",
  },
];

const categories = ["All", "Full Detail", "Interior Detail", "Paint Correction", "Shop"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-wider text-gold"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-playfair text-5xl font-bold text-dark-50"
          >
            Gallery of
            <br />
            <span className="text-gradient-gold">Transformations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-dark-400"
          >
            Browse our portfolio of completed work. Each vehicle represents our
            34 years of commitment to excellence and attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-dark-900 border-b border-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gold text-dark-950"
                    : "bg-dark-800 text-dark-400 hover:bg-dark-700 hover:text-dark-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-dark-800 text-left"
                >
                  {/* Real Image */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-xs font-medium text-gold">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-semibold text-dark-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-dark-400">
                      {item.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 p-2 text-dark-400 hover:text-dark-50"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Real image in lightbox */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>

              <div className="mt-4">
                <span className="text-sm font-medium text-gold">
                  {selectedItem.category}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-dark-50">
                  {selectedItem.title}
                </h3>
                <p className="mt-2 text-dark-400">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
