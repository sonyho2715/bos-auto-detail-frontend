// src/components/PriceCalculator/PriceCalculator.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PriceCalculator: React.FC = () => {
  const [vehicleType, setVehicleType] = useState('sedan');
  const [condition, setCondition] = useState('normal');
  const [services, setServices] = useState<string[]>(['exterior', 'interior']);
  const [addOns, setAddOns] = useState<string[]>([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const vehicleTypes = [
    { id: 'sedan', name: 'Sedan', multiplier: 1.0, icon: '🚗' },
    { id: 'suv', name: 'SUV/Truck', multiplier: 1.3, icon: '🚙' },
    { id: 'luxury', name: 'Luxury Vehicle', multiplier: 1.5, icon: '🏎️' },
    { id: 'sports', name: 'Sports Car', multiplier: 1.4, icon: '🏁' },
  ];

  const conditions = [
    { id: 'excellent', name: 'Excellent', multiplier: 0.8 },
    { id: 'normal', name: 'Normal Wear', multiplier: 1.0 },
    { id: 'dirty', name: 'Needs Work', multiplier: 1.2 },
    { id: 'very-dirty', name: 'Very Dirty', multiplier: 1.5 },
  ];

  const serviceOptions = [
    { id: 'exterior', name: 'Exterior Wash & Detail', price: 80 },
    { id: 'interior', name: 'Interior Deep Clean', price: 100 },
    { id: 'polish', name: 'Paint Polish', price: 120 },
    { id: 'wax', name: 'Premium Wax', price: 80 },
  ];

  const addOnOptions = [
    { id: 'headlight', name: 'Headlight Restoration', price: 79 },
    { id: 'engine', name: 'Engine Bay Detailing', price: 89 },
    { id: 'pet', name: 'Pet Hair Removal', price: 59 },
    { id: 'odor', name: 'Odor Elimination', price: 69 },
    { id: 'scratch', name: 'Scratch Removal', price: 149 },
  ];

  useEffect(() => {
    calculatePrice();
  }, [vehicleType, condition, services, addOns]);

  const calculatePrice = () => {
    const vehicleMultiplier = vehicleTypes.find(v => v.id === vehicleType)?.multiplier || 1.0;
    const conditionMultiplier = conditions.find(c => c.id === condition)?.multiplier || 1.0;

    let basePrice = services.reduce((total, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    const addOnsPrice = addOns.reduce((total, addonId) => {
      const addon = addOnOptions.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);

    const total = (basePrice * vehicleMultiplier * conditionMultiplier) + addOnsPrice;
    setEstimatedPrice(Math.round(total));
  };

  const toggleService = (serviceId: string) => {
    setServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleAddOn = (addonId: string) => {
    setAddOns(prev =>
      prev.includes(addonId)
        ? prev.filter(a => a !== addonId)
        : [...prev, addonId]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-blue-900 mb-2">
          Instant Price Estimate
        </h2>
        <p className="text-gray-600">Customize your detail package</p>
      </div>

      {/* Vehicle Type */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          1. Select Your Vehicle Type
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {vehicleTypes.map(type => (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVehicleType(type.id)}
              className={`p-4 rounded-xl border-2 text-center transition-all ${
                vehicleType === type.id
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="text-3xl mb-2">{type.icon}</div>
              <div className="text-sm font-semibold">{type.name}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          2. Current Condition
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {conditions.map(cond => (
            <motion.button
              key={cond.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCondition(cond.id)}
              className={`p-3 rounded-xl border-2 text-center transition-all ${
                condition === cond.id
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="text-sm font-semibold">{cond.name}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          3. Select Services (at least one)
        </label>
        <div className="space-y-2">
          {serviceOptions.map(service => (
            <motion.button
              key={service.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleService(service.id)}
              className={`w-full p-4 rounded-xl border-2 text-left flex justify-between items-center transition-all ${
                services.includes(service.id)
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    services.includes(service.id)
                      ? 'bg-amber-600 border-amber-600'
                      : 'border-gray-300'
                  }`}
                >
                  {services.includes(service.id) && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
                <span className="font-medium">{service.name}</span>
              </div>
              <span className="text-amber-600 font-bold">${service.price}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Add-Ons */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          4. Add-Ons (Optional)
        </label>
        <div className="space-y-2">
          {addOnOptions.map(addon => (
            <motion.button
              key={addon.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleAddOn(addon.id)}
              className={`w-full p-3 rounded-xl border-2 text-left flex justify-between items-center transition-all ${
                addOns.includes(addon.id)
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    addOns.includes(addon.id)
                      ? 'bg-amber-600 border-amber-600'
                      : 'border-gray-300'
                  }`}
                >
                  {addOns.includes(addon.id) && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
                <span className="text-sm font-medium">{addon.name}</span>
              </div>
              <span className="text-amber-600 font-semibold text-sm">+${addon.price}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={estimatedPrice}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 text-center"
        >
          <p className="text-white/80 text-sm font-semibold mb-2">
            Your Estimated Total
          </p>
          <p className="text-5xl font-bold text-amber-400 mb-4">
            ${estimatedPrice}
          </p>
          <p className="text-white/60 text-xs mb-4">
            *Final price may vary based on vehicle condition
          </p>
          <motion.a
            href="/book"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
          >
            Book This Package
          </motion.a>
        </motion.div>
      </AnimatePresence>

      <p className="text-center text-gray-500 text-sm mt-6">
        Need help choosing? <a href="/contact" className="text-amber-600 hover:underline">Contact us</a> for a free consultation
      </p>
    </div>
  );
};
