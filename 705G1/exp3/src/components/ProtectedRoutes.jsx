import React from 'react'
import { Children } from 'react'

function ProtectedRoutes({children}) {
  const loggedin = localStorage.getItem("islogged")
  if (!loggedin) {
    window.location.href = '/login'
  }
  else {
    return children
  }
}

export default ProtectedRoutes