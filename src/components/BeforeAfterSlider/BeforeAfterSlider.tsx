// src/components/BeforeAfterSlider/BeforeAfterSlider.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return;

    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-blue-900 mb-4">{title}</h3>
      <div
        className="relative w-full h-96 overflow-hidden rounded-xl shadow-2xl cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onClick={handleMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            AFTER
          </div>
        </div>

        {/* Before Image (Overlay with clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            BEFORE
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: isDragging ? 0 : 1 }}
        >
          ← Drag to compare →
        </motion.div>
      </div>
    </div>
  );
};
