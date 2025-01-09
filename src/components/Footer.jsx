import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 absolute bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 To-Do List App. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="text-indigo-300 hover:text-indigo-100 mr-4">Privacy Policy</a>
          <a href="#" className="text-indigo-300 hover:text-indigo-100 mr-4">Terms of Service</a>
          <a href="#" className="text-indigo-300 hover:text-indigo-100">Contact Us</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

