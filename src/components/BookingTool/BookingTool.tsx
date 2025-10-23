// src/components/BookingTool/BookingTool.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input } from '@/components';

interface Service {
  id: string;
  name: string;
  price: number;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
}

const services: Service[] = [
  { id: 'express', name: 'Express Detail', price: 149 },
  { id: 'premium', name: 'Premium Detail', price: 299 },
  { id: 'luxury', name: 'Luxury Detail', price: 499 },
  { id: 'ceramic', name: 'Ceramic Coating', price: 1299 },
  { id: 'interior', name: 'Interior Only', price: 199 },
  { id: 'mobile', name: 'Mobile Service', price: 349 },
];

const addOns: AddOn[] = [
  { id: 'headlight', name: 'Headlight Restoration', price: 79 },
  { id: 'engine', name: 'Engine Bay Detailing', price: 89 },
  { id: 'pet', name: 'Pet Hair Removal', price: 59 },
  { id: 'odor', name: 'Odor Elimination', price: 69 },
  { id: 'scratch', name: 'Scratch Removal', price: 149 },
  { id: 'sealant', name: 'Paint Sealant', price: 99 },
];

export const BookingTool: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    date: '',
    notes: '',
  });

  const calculateTotal = () => {
    const servicePrice = services.find((s) => s.id === selectedService)?.price || 0;
    const addOnsPrice = selectedAddOns.reduce((total, addonId) => {
      const addon = addOns.find((a) => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return servicePrice + addOnsPrice;
  };

  const toggleAddOn = (addonId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                    step >= s
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                <p className="text-sm mt-2 font-medium">
                  {s === 1 ? 'Service' : s === 2 ? 'Add-Ons' : 'Details'}
                </p>
              </div>
              {s < 3 && (
                <div
                  className={`flex-1 h-1 mx-4 ${
                    step > s ? 'bg-amber-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Select Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
              Select Your Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    selectedService === service.id
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-2xl font-bold text-amber-600">${service.price}</p>
                </motion.button>
              ))}
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!selectedService}
                size="lg"
              >
                Continue to Add-Ons
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Select Add-Ons */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-2">
              Add Extra Services
            </h2>
            <p className="text-gray-600 mb-6">Optional - Select any that apply</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {addOns.map((addon) => (
                <motion.button
                  key={addon.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedAddOns.includes(addon.id)
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-900">{addon.name}</h3>
                      <p className="text-amber-600 font-bold">+${addon.price}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        selectedAddOns.includes(addon.id)
                          ? 'bg-amber-600 border-amber-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedAddOns.includes(addon.id) && (
                        <span className="text-white text-sm">✓</span>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="flex justify-between">
              <Button onClick={() => setStep(1)} variant="outline" size="lg">
                Back
              </Button>
              <Button onClick={() => setStep(3)} size="lg">
                Continue to Details
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact & Vehicle Details */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
              Your Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  label="Vehicle Type"
                  name="vehicleType"
                  placeholder="e.g., 2023 BMW X5"
                  required
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                />
              </div>

              <Input
                label="Preferred Date"
                name="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />

              <Input
                label="Additional Notes"
                name="notes"
                isTextarea
                placeholder="Any special requests or concerns?"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>
                      {services.find((s) => s.id === selectedService)?.name}
                    </span>
                    <span className="font-semibold">
                      ${services.find((s) => s.id === selectedService)?.price}
                    </span>
                  </div>
                  {selectedAddOns.map((addonId) => {
                    const addon = addOns.find((a) => a.id === addonId);
                    return (
                      <div key={addonId} className="flex justify-between text-sm">
                        <span className="text-gray-600">{addon?.name}</span>
                        <span className="text-gray-600">+${addon?.price}</span>
                      </div>
                    );
                  })}
                  <div className="border-t-2 border-gray-300 pt-2 mt-2">
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-blue-900">Total</span>
                      <span className="text-amber-600">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button onClick={() => setStep(2)} variant="outline" size="lg" type="button">
                  Back
                </Button>
                <Button type="submit" size="lg">
                  Submit Booking Request
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
