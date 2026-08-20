import React from 'react'
import { Link } from "react-router";

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
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar