import React from 'react'
import { motion } from 'framer-motion'

const CodePreview = () => (
  <div className="relative rounded-lg overflow-hidden bg-[#1E1E1E] shadow-2xl">
    <div className="flex items-center px-4 py-2 bg-[#2D2D2D] border-b border-gray-800">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
      </div>
      <div className="flex space-x-2 ml-4">
        <span className="text-gray-400 text-sm">Javascript</span>
        <span className="text-gray-600 text-sm">iOS (Swift)</span>
        <span className="text-gray-600 text-sm">Android (Kotlin)</span>
        <span className="text-gray-600 text-sm">Angular</span>
      </div>
    </div>
    <div className="p-4">
      <pre className="text-sm font-mono">
        <code className="text-white">
          <span className="text-[#C586C0]">const</span>{" "}
          <span className="text-[#9CDCFE]">login</span>{" "}
          <span className="text-[#C586C0]">=</span>{" "}
          <span className="text-[#569CD6]">async</span>{" "}
          <span className="text-[#D4D4D4]">()</span>{" "}
          <span className="text-[#D4D4D4]">=&gt;</span>{" "}
          <span className="text-[#D4D4D4]">{"{"}</span>
          {"\n  "}
          <span className="text-[#C586C0]">await</span>{" "}
          <span className="text-[#9CDCFE]">auth0</span>
          <span className="text-[#D4D4D4]">.</span>
          <span className="text-[#DCDCAA]">loginWithRedirect</span>
          <span className="text-[#D4D4D4]">({"{"}</span>
          {"\n    "}
          <span className="text-[#9CDCFE]">redirect_uri</span>
          <span className="text-[#D4D4D4]">:</span>{" "}
          <span className="text-[#9CDCFE]">window</span>
          <span className="text-[#D4D4D4]">.</span>
          <span className="text-[#9CDCFE]">location</span>
          <span className="text-[#D4D4D4]">.</span>
          <span className="text-[#9CDCFE]">origin</span>
          {"\n  "}
          <span className="text-[#D4D4D4]">{"});"}</span>
          {"\n"}
          <span className="text-[#D4D4D4]">{"};"}</span>
        </code>
      </pre>
    </div>
  </div>
)

const TechIcon = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
    <img src={`/icons/${name}.svg`} alt={name} className="w-8 h-8" />
  </div>
)

const Implementation = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0A1122]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1122] via-[#0D1F3C]/20 to-[#0A1122]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Code preview */}
          <div className="lg:pr-8">
            <CodePreview />
          </div>

          {/* Right side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Implement Auth0 in any application in just 5 minutes
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                With a few lines of code you can have Auth0 integrated in any app written in any language, and any framework. We provide 30+ SDKs & Quickstarts to help you succeed on your implementation.
              </p>

              {/* Technology icons */}
              <div className="flex space-x-6 mb-8">
                <TechIcon name="ios" />
                <TechIcon name="android" />
                <TechIcon name="javascript" />
                <TechIcon name="php" />
                <TechIcon name="react" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* UI Examples Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {/* Email Invitation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-full" />
              <div>
                <div className="text-sm text-gray-600">Arduino</div>
                <div className="text-xs text-gray-400">support@arduino.com</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">You've been invited to Arduino.</h3>
            <button className="w-full py-2 px-4 bg-teal-500 text-white rounded-md">
              Accept Invitation
            </button>
          </motion.div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <div className="flex justify-center mb-8">
              <div className="w-12 h-12 bg-teal-500 rounded-full" />
            </div>
            <h3 className="text-center text-lg mb-6">Log in to Arduino to continue</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-4 p-2 border rounded-md"
            />
            <button className="w-full py-2 px-4 bg-teal-500 text-white rounded-md mb-4">
              Continue
            </button>
            <div className="text-center text-sm">
              <span className="text-gray-500">Don't have an account? </span>
              <a href="#" className="text-teal-500">Sign up</a>
            </div>
          </motion.div>

          {/* User Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="bg-[#2D2D2D] px-4 py-2 flex justify-between items-center">
              <span className="text-white">USER PROFILE</span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-700 rounded w-1/2" />
                <div className="h-4 bg-gray-700 rounded w-2/3" />
                <div className="h-4 bg-gray-700 rounded w-3/4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Implementation 