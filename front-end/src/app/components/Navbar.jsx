"use client"
import React, { useState } from 'react';
// Optional: If using React Router for navigation
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation Links Data (adjust as needed)
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    // Add more links if necessary
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
              MyBlog
            </a>
            {/* If using an image logo:
            <a href="/">
              <img className="h-8 w-auto" src="/path/to/your/logo.png" alt="MyBlog Logo" />
            </a>
            */}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                // Replace <a> with <Link> if using React Router
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  // Add active link styling if needed (example below for simple href matching)
                  // aria-current={window.location.pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </a>
                /* --- React Router Example ---
                 <Link
                   key={link.name}
                   to={link.href}
                   className={({ isActive }) =>
                     `px-3 py-2 rounded-md text-sm font-medium ${
                       isActive
                         ? 'bg-blue-100 text-blue-700'
                         : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                     }`
                   }
                 >
                   {link.name}
                 </Link>
                */
              ))}
              {/* Optional: Add Search, Login Button etc. here for desktop */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed (Hamburger) */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Icon when menu is open (Close)
                <svg className="block h-4 w-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right z-40 bg-white shadow-lg ring-1 ring-black ring-opacity-5" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map((link) => (
                // Replace <a> with <Link> if using React Router
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  // aria-current={window.location.pathname === link.href ? 'page' : undefined}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </a>
                 /* --- React Router Example ---
                 <Link
                   key={link.name}
                   to={link.href}
                   className={({ isActive }) =>
                     `block px-3 py-2 rounded-md text-base font-medium ${
                       isActive
                         ? 'bg-blue-100 text-blue-700'
                         : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                     }`
                   }
                    onClick={() => setIsOpen(false)} // Close menu on link click
                 >
                   {link.name}
                 </Link>
                */
              ))}
            {/* Optional: Add Search, Login Button etc. here for mobile */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;