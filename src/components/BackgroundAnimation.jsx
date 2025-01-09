import React from 'react'
import { motion } from 'framer-motion'

const BackgroundAnimation = ({ theme }) => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          }`}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 3 + 1,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundAnimation

