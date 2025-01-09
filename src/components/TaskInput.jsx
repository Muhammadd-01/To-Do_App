import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      addTask(taskText.trim(), priority, dueDate)
      setTaskText('')
      setPriority('medium')
      setDueDate('')
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        handleSubmit(e)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [taskText, priority, dueDate])

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="What's on your mind today? (Ctrl + Enter to add)"
          className="flex-grow px-4 py-2 rounded-md border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors"
          aria-label="New task input"
        />
        <motion.button
          type="submit"
          className="px-6 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Task
        </motion.button>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-2 rounded-md border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-2 rounded-md border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>
    </form>
  )
}

export default TaskInput

