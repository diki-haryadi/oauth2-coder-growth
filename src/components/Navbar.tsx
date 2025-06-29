import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const mockUser = {
  name: 'Diki Haryadi',
  email: 'dk.harryadi@gmail.com',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};
const mockTenant = {
  id: 'dev-1md8m8doz8ynfucb',
  flag: '🇦🇺',
  env: 'DEVELOPMENT',
  team: 'team-ekvvhxl',
};
const mockLanguages = [
  { label: 'English (US)', value: 'en', checked: true },
  { label: 'Français (CA)', value: 'fr', checked: false, beta: true },
  { label: '日本語', value: 'jp', checked: false, beta: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tenantOpen, setTenantOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [docOpen, setDocOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close popovers on outside click
  const tenantRef = useRef(null);
  const userRef = useRef(null);
  const langRef = useRef(null);
  const notifRef = useRef(null);
  const docRef = useRef(null);
  const searchRef = useRef(null);

  return (
    <motion.nav 
      className="bg-dark-300/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="AuthG" />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Platform
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Solutions
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Developers
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Pricing
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Log In
            </a>
            <motion.a 
              href="#" 
              className="ml-4 bg-accent-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Sales
            </motion.a>
          </motion.div>

          <div className="flex items-center md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-200">
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-dark-100 rounded-md">
            Platform
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-dark-100 rounded-md">
            Solutions
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-dark-100 rounded-md">
            Developers
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-dark-100 rounded-md">
            Pricing
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-dark-100 rounded-md">
            Log In
          </a>
          <a href="#" className="block px-3 py-2 bg-accent-purple text-white text-base font-medium rounded-md text-center">
            Talk to Sales
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 