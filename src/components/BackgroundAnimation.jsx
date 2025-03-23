import React from 'react'
import { motion } from 'framer-motion'

const BackgroundAnimation = ({ theme }) => {
  const shapes = ['circle', 'triangle', 'square']
  const colors = theme === 'dark' 
    ? ['#A1A1AA', '#D4D4D8', '#E4E4E7'] 
    : ['#BFDBFE', '#93C5FD', '#60A5FA']

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${shapes[i % shapes.length]}`}
          style={{
            backgroundColor: colors[i % colors.length],
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundAnimation

