// src/components/Spinner/Spinner.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'amber';
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color = 'primary' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colors = {
    primary: 'border-blue-900 border-t-transparent',
    white: 'border-white border-t-transparent',
    amber: 'border-amber-600 border-t-transparent',
  };

  return (
    <motion.div
      className={`${sizes[size]} border-4 ${colors[color]} rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
};

export const LoadingOverlay: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-4 shadow-2xl">
        <Spinner size="lg" color="primary" />
        <p className="text-blue-900 font-semibold">{message}</p>
      </div>
    </motion.div>
  );
};
