import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  className?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, gradient, className }) => {
  return (
    <motion.div
      className={cn(
        'rounded-xl p-6 aspect-[1.6/1] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 cursor-pointer',
        gradient,
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="text-white text-4xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard 