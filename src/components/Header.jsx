import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import UserIdContext from './UserIdContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const { UserId, setUserId } = useContext(UserIdContext);
  const [inputValue, setInputValue] = useState(UserId);
  const [isNavOpen, setNavOpen] = useState(false);

  const showToastMessage = () => {
    toast.success('UserId Set Successfully');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setUserId(inputValue);
      const response = await fetch(`https://codeforces.com/api/user.status?handle=${inputValue}`);
      const result = await response.json();
      if (result.status === 'OK') {
        toast.success('UserId Set Successfully!', {
          theme: 'dark',
          autoClose: 200,
        });
      } else {
        toast.error(`No ID found by ${inputValue} on CF`, {
          theme: 'dark',
          autoClose: 200,
        });
      }
    }
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="border-b   text-black font-sans border-b-gray-400 p-4 lg:flex lg:justify-between lg:items-center">
      
      <div className="flex items-center">
        <button
          onClick={toggleNav}
          className="lg:hidden text-gray-600 focus:outline-none mr-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isNavOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <img src={logo} alt="Logo" className="h-10  lg:ml-10 w-auto" />
        <NavLink to="/" className="ml-3 font-bold text-xl">solvecp.ac</NavLink>
      </div>
      <ul className={`lg:flex lg:flex-row lg:items-center items-end lg:justify-end list-none mt-4 lg:mt-0 ${isNavOpen ? 'block' : 'hidden'}`}>
        <li className="mr-10 mb-2 lg:mb-0">
          <NavLink to="/" className="text-black font-bold">Home</NavLink>
        </li>
        <li className="mr-10 mb-2 lg:mb-0">
          <NavLink to="/problems/level" className="text-black font-bold">Problems</NavLink>
        </li>
        <li className="mr-10 mb-2 lg:mb-0">
          <NavLink to="/arena" className="text-black font-bold">Arena</NavLink>
        </li>
        <li className="mr-10 mb-2 lg:mb-0">
          <NavLink to="/tracker" className="text-black font-bold">Tracker</NavLink>
        </li>
        <li>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Set Your CF ID"
          className="p-2 mt-4 lg:mt-0 w-[7cm] lg:p-1 items-end border-2 border-gray-600 rounded-md lg:w-auto"
        />
        </li>
       
      </ul>
      <ToastContainer />
    </div>
  );
}

export default Header;
