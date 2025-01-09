import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Task({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  const handleEdit = () => {
    if (editedText.trim() !== task.text) {
      editTask(task.id, editedText.trim())
    }
    setIsEditing(false)
  }

  return (
    <AnimatePresence>
      <motion.div
        className={`flex items-center space-x-2 p-2 rounded ${
          task.completed ? 'bg-green-100' : 'bg-gray-100'
        }`}
        animate={{
          scale: task.completed ? [1, 1.05, 1] : 1,
          transition: { duration: 0.3 }
        }}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="form-checkbox h-5 w-5 text-indigo-500"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            className="flex-grow px-2 py-1 rounded border border-indigo-300 focus:outline-none focus:border-indigo-500"
            autoFocus
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`flex-grow cursor-pointer ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.text}
          </span>
        )}
        <motion.button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Delete
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}

export default Task

