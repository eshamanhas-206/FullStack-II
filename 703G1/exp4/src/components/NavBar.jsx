import React from 'react'
import { Link } from 'react-router'
function NavBar() {
  return (
      <div>
          <h4>Student Management System | </h4>
          <Link to="/">Home |</Link>
          <Link to="/dashboard">Dashboard |</Link>
          <Link to="/login">Login</Link>        
    </div>
  )
}

export default NavBar
