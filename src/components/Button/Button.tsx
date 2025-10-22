// src/components/Button/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer font-serif';

  const variantStyles = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white',
    secondary: 'bg-blue-900 hover:bg-blue-950 text-white',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
    ghost: 'text-amber-600 hover:bg-amber-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={buttonClass}
    >
      {children}
    </motion.button>
  );
};
