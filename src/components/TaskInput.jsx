import React, { useState } from 'react'
import { motion } from 'framer-motion'

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      addTask(taskText.trim())
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow px-4 py-2 rounded-l border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
        />
        <motion.button
          type="submit"
          className="px-4 py-2 rounded-r bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add
        </motion.button>
      </div>
    </form>
  )
}

export default TaskInput

