import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Task from './Task'

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  const [sortBy, setSortBy] = useState('default')

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'name') {
      return a.text.localeCompare(b.text)
    } else if (sortBy === 'date') {
      return new Date(b.dueDate) - new Date(a.dueDate)
    } else if (sortBy === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority]
    }
    return 0
  })

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Sort by</option>
          <option value="name">Name</option>
          <option value="date">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <ul className="space-y-2">
        <AnimatePresence>
          {sortedTasks.map(task => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Task
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default TaskList

