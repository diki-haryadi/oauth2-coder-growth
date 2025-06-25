import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const textPairs = [
    { subject: 'developers', threat: 'attackers' },
    { subject: 'online shoppers', threat: 'scammers' },
    { subject: 'customers', threat: 'bad actors' },
    { subject: 'developers', threat: 'attackers' },
    { subject: 'online shoppers', threat: 'scammers' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textPairs.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[600px] bg-[#0A1122] overflow-hidden w-screen pt-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1122] via-[#0D1F3C] to-[#1A1B26] opacity-50" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Secure access{' '}
            <br className="hidden sm:block" />
            for{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={`subject-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#635DFF] to-[#00B9FF] inline-block"
              >
                {textPairs[currentIndex].subject}
              </motion.span>
            </AnimatePresence>
            <br />
            But not{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={`threat-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B9FF] to-[#01B48C] inline-block"
              >
                {textPairs[currentIndex].threat}
              </motion.span>
            </AnimatePresence>
          </h1>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto lg:mx-0">
            <Input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-96 bg-black/30 border-gray-700 text-white placeholder-gray-400"
            />
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-[#635DFF] hover:bg-[#635DFF]/90"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 