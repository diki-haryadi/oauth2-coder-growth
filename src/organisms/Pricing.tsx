import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingTier = ({ name, price, description, features, isPopular = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative rounded-2xl p-8 ${
      isPopular 
        ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20' 
        : 'bg-[#1A1B26]/95'
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-gray-400 ml-2">/month</span>
      </div>
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>

    <Button 
      variant={isPopular ? "default" : "outline"}
      className="w-full"
    >
      Get started
    </Button>
  </motion.div>
);

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for side projects and simple applications",
      features: [
        "Up to 7,000 active users",
        "Basic authentication features",
        "Email/password and social login",
        "Basic security features",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: "23",
      description: "For growing applications with advanced needs",
      features: [
        "Up to 50,000 active users",
        "Advanced authentication features",
        "Multi-factor authentication",
        "Machine-to-machine authentication",
        "24/7 email support"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For large-scale applications requiring maximum security",
      features: [
        "Unlimited active users",
        "Custom deployment options",
        "Dedicated account manager",
        "Custom security policies",
        "24/7 premium support"
      ]
    }
  ];

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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your application. All plans include a free trial period.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-4">
            Need a custom plan? Contact our sales team for a tailored solution.
          </p>
          <Button variant="outline">
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 