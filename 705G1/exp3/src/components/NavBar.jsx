import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  const loggedin = localStorage.getItem("islogged")
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>📚</span>
        <div>
          <h3 style={styles.title}>Student Management</h3>
          <p style={styles.subtitle}>System</p>
        </div>
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          🏠 Home
        </Link>

        <Link to="/dashboard" style={styles.link}>
          🧮 Dashboard
        </Link>

        {!loggedin && <Link to="/login" style={styles.loginButton}>
          🔑 Login
        </Link>}
      </div>
    </nav>
  )
}

const styles = {
  navbar: {
    height: '70px',
    padding: '0 7%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
    boxSizing: 'border-box',
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  logoIcon: {
    fontSize: '30px',
  },

  title: {
    margin: 0,
    fontSize: '18px',
    color: '#1e293b',
  },

  subtitle: {
    margin: '2px 0 0',
    fontSize: '11px',
    color: '#64748b',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },

  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  link: {
    padding: '9px 14px',
    textDecoration: 'none',
    color: '#475569',
    fontSize: '15px',
    fontWeight: '500',
    borderRadius: '7px',
  },

  loginButton: {
    padding: '10px 18px',
    textDecoration: 'none',
    color: '#ffffff',
    backgroundColor: '#2563eb',
    borderRadius: '7px',
    fontSize: '15px',
    fontWeight: '600',
    marginLeft: '8px',
  },
}

export default NavBar