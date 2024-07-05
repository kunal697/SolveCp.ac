import React from 'react'
import { NavLink } from 'react-router-dom'

function ProblemHeader() {
  return (
    <div className='flex items-center justify-start border-b'>
        <ul className='flex flex-row lg:ml-32 m-1 mb-2 font-sans font-bold text-gray-500  '>
            <li className='ml-5 hover:text-black'>
                <NavLink to="/problems/level">Level</NavLink>
            </li>
            <li className='ml-5 hover:text-black'>
                <NavLink to="/problems/tag">Tags</NavLink>
            </li>
            <li className='ml-5 hover:text-black'>
                <NavLink to="/problems/class">Class</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default ProblemHeader