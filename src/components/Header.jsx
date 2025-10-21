import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              React + Tailwind
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
