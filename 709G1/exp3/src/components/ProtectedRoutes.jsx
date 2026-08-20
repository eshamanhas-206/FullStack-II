import React from 'react'

function ProtectedRoutes({ children }) {
 
  const isloggedIn = localStorage.getItem("isLoggedIn");
  if (!isloggedIn) { 
    window.location.href = "/login";
  }
  else {
    return children;
  }

  
}

export default ProtectedRoutes