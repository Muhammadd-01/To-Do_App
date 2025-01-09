import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import FeedbackPage from './components/FeedbackPage'
import useTasks from './hooks/useTasks'
import useTheme from './hooks/useTheme'
import BackgroundAnimation from './components/BackgroundAnimation'

function App() {
  const { tasks, addTask, toggleTask, deleteTask, editTask, clearCompletedTasks } = useTasks()
  const { theme, toggleTheme } = useTheme()
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8 pb-16">
        <motion.header 
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">To-Do List</h1>
          <div className="mt-4 space-x-4">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button
              onClick={() => setShowFeedback(!showFeedback)}
              className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              {showFeedback ? 'Close Feedback' : 'Give Feedback'}
            </button>
          </div>
        </motion.header>
        <AnimatePresence>
          {showFeedback ? (
            <FeedbackPage setShowFeedback={setShowFeedback} />
          ) : (
            <motion.div 
              className={`max-w-md mx-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TaskInput addTask={addTask} />
              <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
              />
              {tasks.some(task => task.completed) && (
                <motion.button
                  onClick={clearCompletedTasks}
                  className="mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Completed Tasks
                </motion.button>
              )}
              <div className="mt-4 text-sm">
                Total tasks: {tasks.length} | Completed: {tasks.filter(task => task.completed).length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <BackgroundAnimation theme={theme} />
      <Footer />
    </div>
  )
}

export default App

