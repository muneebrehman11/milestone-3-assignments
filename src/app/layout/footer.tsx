import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="space-x-6">
              <a href="/about" className="hover:text-blue-400">About</a>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
              <a href="/privacy" className="hover:text-blue-400">Privacy</a>
            </div>
            <div>&copy; 2025 My Blog</div>
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    

  )
}

export default Footer