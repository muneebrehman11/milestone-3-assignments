import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="space-x-6">
              <Link href="/about" className="hover:text-blue-400">About</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
              <Link href="/privacy" className="hover:text-blue-400">Privacy</Link>
            </div>
            <div>&copy; 2025 My Blog</div>
            <div className="space-x-4">
              <Link href="#" className="hover:text-blue-400">Facebook</Link>
              <Link href="#" className="hover:text-blue-400">Twitter</Link>
              <Link href="#" className="hover:text-blue-400">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    

  )
}

export default Footer