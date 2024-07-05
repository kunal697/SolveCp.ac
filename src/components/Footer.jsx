import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-gray-200 py-4 lg:py-6 px-6 lg:px-10 flex justify-between items-center">
      {/* Left Section - Logo and Brand */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-7 w-auto mr-3" />
        <h1 className="text-gray-700 text-lg font-semibold">SolveCP.ac</h1>
      </div>

      {/* Right Section - Navigation Links and Social Media Icons */}
      <div className="flex items-center">
        {/* Navigation Links */}
        <nav className="hidden lg:flex flex-wrap justify-center items-center mr-6">
          <NavLink exact to="/" className="text-gray-500 hover:text-black lg:mr-5 mb-3 lg:mb-0">
            Home
          </NavLink>
          <NavLink to="/problems/level" className="text-gray-500 hover:text-black lg:mr-5 mb-3 lg:mb-0">
            Problems
          </NavLink>
          <NavLink to="/arena" className="text-gray-500 hover:text-black lg:mr-5 mb-3 lg:mb-0">
            Arena
          </NavLink>
          <NavLink to="/about" className="text-gray-500 hover:text-black mb-3 lg:mb-0">
            About
          </NavLink>
        </nav>


        <div className="flex items-center">
        
          <a
            href=" https://www.linkedin.com/in/kunal-bodke-b29663252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 mr-3"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/kunal697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
