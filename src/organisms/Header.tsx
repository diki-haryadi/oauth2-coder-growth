import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavLink from '../atoms/NavLink';
import DevelopersMenu from './DevelopersMenu';
import DocumentationMenu from './DocumentationMenu';
import ProductMenu from './ProductMenu';
import SolutionsMenu from './SolutionsMenu';

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveSubmenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#0A1122] to-[#0D1F3C] py-2 px-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-white">Auth for GenAI, available now in Developer Preview.</span>
            <Link to="/u/signup" className="text-white underline hover:no-underline">
              Get started →
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/u/login" className="text-white hover:text-gray-300">
              Login
            </Link>
            <div className="flex items-center space-x-1">
              <span className="text-white">English</span>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-[#0A1122]/95 backdrop-blur-sm border-b border-gray-800/50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/logo.svg" alt="AuthG" className="h-8 w-auto" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <div 
                onMouseEnter={() => handleMouseEnter('developers')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <NavLink href="#" hasSubmenu>
                  Developers
                </NavLink>
                <AnimatePresence>
                  {activeSubmenu === 'developers' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DevelopersMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div 
                onMouseEnter={() => handleMouseEnter('documentation')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <NavLink href="#" hasSubmenu>
                  Documentation
                </NavLink>
                <AnimatePresence>
                  {activeSubmenu === 'documentation' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DocumentationMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div 
                onMouseEnter={() => handleMouseEnter('product')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <NavLink href="#" hasSubmenu>
                  Product
                </NavLink>
                <AnimatePresence>
                  {activeSubmenu === 'product' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div 
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <NavLink href="#" hasSubmenu>
                  Solutions
                </NavLink>
                <AnimatePresence>
                  {activeSubmenu === 'solutions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <SolutionsMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="#">
                Blog
              </NavLink>
              <NavLink href="/pricing">
                Pricing
              </NavLink>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="hidden md:inline-flex px-6 py-2 bg-white hover:bg-gray-100 text-black rounded-lg font-medium transition-all"
              >
                Sign up
              </a>
              <a 
                href="#" 
                className="px-6 py-2 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/5 transition-all"
              >
                Contact sales
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu would go here */}
    </div>
  );
};

export default Header; 