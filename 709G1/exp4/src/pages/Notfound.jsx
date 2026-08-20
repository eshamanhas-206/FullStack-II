import React from 'react'
import { Link } from 'react-router'

function Notfound() {
  return (
    <div className="page-shell">
      <div className="not-found">
        <span className="badge soft">404</span>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for does not exist or has been moved.
        </p>

        <Link className="back-btn" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Notfound