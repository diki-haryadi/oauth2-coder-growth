import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';

const FeatureCard = ({ tag, title, description, children, buttonText = "Get started" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative overflow-hidden rounded-2xl bg-[#1A1B26]/95 backdrop-blur-sm p-8 group hover:bg-[#1A1B26] transition-all duration-300 shadow-xl hover:shadow-indigo-500/10"
  >
    <div className="relative z-10">
      <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-400 bg-indigo-500/10 rounded-full mb-4">
        {tag}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>
      <Button 
        variant="outline" 
        className="border-gray-700/50 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 text-white"
      >
        {buttonText}
      </Button>
    </div>
    <div className="relative z-10 mt-8">
      {children}
    </div>
    
    {/* Gradient background effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
    
    {/* Bottom gradient line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
  </motion.div>
);

const Features = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Auth0 is an easy to implement, adaptable
            <br />
            authentication and authorization platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Basically, we make your login box awesome. Learn about our latest innovations:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GenAI Feature Card */}
          <FeatureCard
            tag="DEVELOPER PREVIEW"
            title={<>Auth for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">GenAI</span></>}
            description="Enjoy securing your GenAI apps with the developer experience Auth0 is known for."
          >
            <div className="grid grid-cols-3 gap-4">
              {/* Animated icons grid */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="aspect-square rounded-lg bg-indigo-900/20 flex items-center justify-center group-hover:bg-indigo-900/30 transition-all duration-300 border border-indigo-500/20 group-hover:border-indigo-500/30"
                >
                  <div className="w-8 h-8 bg-indigo-500/30 rounded-md group-hover:bg-indigo-500/40 transition-all duration-300 shadow-lg shadow-indigo-500/10" />
                </motion.div>
              ))}
            </div>
          </FeatureCard>

          {/* Authorization Feature Card */}
          <FeatureCard
            tag="NOW GENERALLY AVAILABLE"
            title="Fine-Grained Authorization"
            description="Enable user collaboration and granular access control in your apps using developer-friendly APIs."
            buttonText="Learn more"
          >
            <div className="bg-[#0D1F3C]/80 backdrop-blur-sm rounded-lg p-4 shadow-xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-48 bg-gradient-to-b from-[#1A1B26] to-transparent rounded-lg border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300 shadow-lg shadow-indigo-500/10"
              >
                {/* Code preview content */}
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-indigo-500/20 rounded" />
                    <div className="h-2 w-1/2 bg-indigo-500/20 rounded" />
                    <div className="h-2 w-2/3 bg-indigo-500/20 rounded" />
                  </div>
                </div>
              </motion.div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features; 