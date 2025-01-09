import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Task from './Task'

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {tasks.map(task => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
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
  )
}

export default TaskList

