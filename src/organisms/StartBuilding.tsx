import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const StartBuilding = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0A1122]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1122] via-[#0D1F3C]/20 to-[#0A1122]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            Start building for free
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 p-2 bg-[#1A1B26] rounded-2xl">
              <input
                type="email"
                placeholder="Your work email"
                className="flex-1 w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-[#635DFF] text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                Get started
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartBuilding; 