import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Secure access for{' '}
            <span className="text-[#00B9FF] block md:inline">online shoppers</span>
            <br />
            But not{' '}
            <span className="text-[#635DFF]">scammers</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AuthG is an easy to implement, adaptable authentication and authorization platform
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-[#635DFF] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
              Get started free
            </button>
            <button className="border border-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/5 transition-all">
              Talk to sales
            </button>
          </motion.div>
        </div>

        {/* Features Preview Section */}
        <motion.div 
          className="mt-24 grid md:grid-cols-3 gap-6 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Auth for GenAI */}
          <div className="bg-gradient-to-br from-[#4A3AFF] to-[#7C3AFF] rounded-xl p-6 aspect-[1.6/1] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <motion.div
              className="text-white text-4xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              🤖
            </motion.div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Auth for GenAI</h3>
              <p className="text-gray-200 text-sm">Secure and manage access to your AI applications</p>
            </div>
          </div>

          {/* Fine-Grained Authorization */}
          <div className="bg-gradient-to-br from-[#00B9FF] to-[#0084FF] rounded-xl p-6 aspect-[1.6/1] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <motion.div
              className="text-white text-4xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              🔐
            </motion.div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Fine-Grained Authorization</h3>
              <p className="text-gray-200 text-sm">Control access with precision at any level</p>
            </div>
          </div>

          {/* Quick Implementation */}
          <div className="bg-gradient-to-br from-[#01B48C] to-[#0295A9] rounded-xl p-6 aspect-[1.6/1] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <motion.div
              className="text-white text-4xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2 }}
            >
              ⚡
            </motion.div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Quick Implementation</h3>
              <p className="text-gray-200 text-sm">Implement auth in minutes, not days</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 