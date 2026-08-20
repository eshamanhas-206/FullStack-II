import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import StudentList from './pages/StudentList'
import StudentProfile from './pages/StudentProfile'
import Notfound from './pages/Notfound'
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {
  const dashboardElement = (
    <ProtectedRoutes>
      <Dashboard />
    </ProtectedRoutes>
  )

  return (
    <>
      <NavBar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />

        {/* Protected student dashboard routes */}
        <Route path="/dashboard" element={dashboardElement}>
          <Route path='studentlist' element={<StudentList />} />
          <Route path="profile/:id" element={<StudentProfile />} />
        </Route>

        {/* Authentication and fallback */}
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>


  )
}

export default App