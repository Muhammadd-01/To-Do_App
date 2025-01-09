import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import FeedbackPage from './components/FeedbackPage'
import BackgroundAnimation from './components/BackgroundAnimation'
import useTasks from './hooks/useTasks'
import useTheme from './hooks/useTheme'
import MotivationalPopup from './components/MotivationalPopup'

function App() {
  const { tasks, addTask, toggleTask, deleteTask, editTask, clearCompletedTasks } = useTasks()
  const { theme, toggleTheme } = useTheme()
  const [showFeedback, setShowFeedback] = useState(false)
  const [showMotivationalPopup, setShowMotivationalPopup] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [filter, setFilter] = useState('all')

  const handleTaskCompletion = (taskId) => {
    toggleTask(taskId)
    setShowMotivationalPopup(true)
    setShowConfetti(true)
  }

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showConfetti])

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const activeTasks = tasks.filter(task => !task.completed).length
  const completedTasks = tasks.filter(task => task.completed).length

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'
    } text-gray-900`}>
      <BackgroundAnimation theme={theme} />
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <div className="container mx-auto px-4 py-8 pb-24 relative z-10">
        <motion.header 
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Awesome To-Do List
          </h1>
          <p className={`mt-2 text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            Stay organized and boost your productivity!
          </p>
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
              className={`max-w-md mx-auto ${
                theme === 'dark' ? 'bg-gray-200' : 'bg-white'
              } rounded-lg shadow-lg p-6`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TaskInput addTask={addTask} />
              <div className="mb-4 flex justify-center space-x-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('active')}
                  className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilter('completed')}
                  className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  Completed
                </button>
              </div>
              <TaskList
                tasks={filteredTasks}
                toggleTask={handleTaskCompletion}
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
              <div className="mt-4 text-sm flex justify-between">
                <span>Total tasks: {tasks.length}</span>
                <span>Active: {activeTasks}</span>
                <span>Completed: {completedTasks}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <MotivationalPopup
          isVisible={showMotivationalPopup}
          onClose={() => setShowMotivationalPopup(false)}
        />
      </div>
      <Footer tasks={tasks} />
    </div>
  )
}

export default App

