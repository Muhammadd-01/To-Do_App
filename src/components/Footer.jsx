import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed).length
  const completionPercentage = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0

  return (
    <footer className="bg-gray-800 text-gray-200 py-6 absolute bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <div className="text-lg font-semibold">Task Completion</div>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${completionPercentage}%` }}></div>
          </div>
          <div>{completionPercentage}% Complete</div>
        </div>
        <p className="mb-4">&copy; 2023 Awesome To-Do List App. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
            <FaGithub size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:contact@example.com" className="text-gray-400 hover:text-gray-200 transition-colors">
            <FaEnvelope size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <div className="text-sm">
          <a href="#" className="text-indigo-300 hover:text-indigo-100 mr-4">Privacy Policy</a>
          <a href="#" className="text-indigo-300 hover:text-indigo-100 mr-4">Terms of Service</a>
          <a href="#" className="text-indigo-300 hover:text-indigo-100">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

