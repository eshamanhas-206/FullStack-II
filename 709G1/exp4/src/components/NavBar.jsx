import React from 'react'
import { Link, NavLink } from "react-router";

function NavBar() {
  return (
    <nav>
      <div className="topbar-inner">
        <Link className="brand" to="/">
          <span className="brand-mark">SM</span>
          <span className="brand-copy">
            Student Manager
            <span>Student records</span>
          </span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Dashboard
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar