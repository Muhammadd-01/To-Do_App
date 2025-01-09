import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const motivationalMessages = [
  "Great job! Keep up the good work!",
  "You're on fire! Nothing can stop you now!",
  "One step closer to your goals. Awesome!",
  "You're making progress! Be proud of yourself!",
  "Success is built one task at a time. Well done!",
  "You're unstoppable! Keep crushing those tasks!",
  "Your productivity is through the roof! Amazing work!",
  "You're a task-completing machine! Fantastic job!",
  "Every completed task is a victory. Celebrate it!",
  "You're turning to-dos into to-dones! Keep it up!"
]

function MotivationalPopup({ isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-center"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MotivationalPopup

