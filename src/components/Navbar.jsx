import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-cyan-700 p-4 flex justify-between items-center">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img src="https://www.nc.ac.th/img/logo.png" alt="Logo" className="h10 w-14 mr-2" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">Nvc Traning Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/"  className="text-white hover:text-slate-400">Home</NavLink></li>
        <li><NavLink to="/course"  className="text-white hover:text-slate-400">Course</NavLink></li>
        <li><NavLink to="/contact"  className="text-white hover:text-slate-400">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar