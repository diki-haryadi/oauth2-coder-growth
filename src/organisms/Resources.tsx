import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ResourceCardProps {
  type: string;
  title: string;
  description: string;
  image?: React.ReactNode;
  link: string;
  gradient?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ type, title, description, image, link, gradient = false }) => (
  <motion.a
    href={link}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`block rounded-2xl overflow-hidden ${
      gradient ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50' : 'bg-[#1A1B26]'
    } hover:scale-[1.02] transition-all duration-300`}
  >
    <div className="p-8">
      <span className="text-sm text-gray-400 uppercase tracking-wider">{type}</span>
      <h3 className="text-3xl font-bold text-white mt-2 mb-4 flex items-center gap-2">
        {title}
        {link && <ArrowRightIcon className="h-6 w-6 inline-block" />}
      </h3>
      <p className="text-gray-300 text-lg">{description}</p>
      {image && (
        <div className="mt-8">
          {image}
        </div>
      )}
    </div>
  </motion.a>
);

const Resources = () => {
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
        >
          <h2 className="text-lg font-semibold text-gray-400 mb-12">RESOURCES</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Auth for GenAI Blog Post */}
          <ResourceCard
            type="BLOG"
            title="Auth0 Announces Auth for GenAI →"
            description="Learn how Auth for GenAI helps secure your GenAI apps."
            gradient={true}
            link="#"
            image={
              <div className="flex items-center justify-center">
                <img 
                  src="https://cdn.auth0.com/website/homepage/resources/image_1.svg" 
                  alt="Auth0 GenAI Illustration"
                  className="w-full h-auto"
                />
              </div>
            }
          />

          {/* Why Auth0 Blog Post */}
          <ResourceCard
            type="BLOG"
            title="Why Auth0? →"
            description="How to evaluate a Customer Identity and Auth solution."
            link="#"
            image={
              <div className="absolute bottom-0 right-0">
                <div className="w-48 h-48 overflow-hidden">
                  <div className="transform rotate-45 origin-bottom-right">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8"
                        style={{
                          width: '200%',
                          marginLeft: '-50%',
                          opacity: 0.3 - i * 0.05
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Whitepaper Section */}
        <div className="mt-8">
          <ResourceCard
            type="WHITEPAPER"
            title="Build vs. Buy: Guide to Evaluating Identity Management →"
            description=""
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Resources; 