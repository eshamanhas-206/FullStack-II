import React from 'react'
 import { Navigate } from "react-router";

import {useNavigate} from 'react-router'
function ProtectedRoute({ children }) {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {

    return <Navigate to="/login" replace />;
  }
  else {
    return children;
  }
}

export default ProtectedRoute