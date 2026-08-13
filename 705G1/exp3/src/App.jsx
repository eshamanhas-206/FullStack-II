import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import StudentList from './pages/StudentList'
import StudentProfile from './pages/StudentProfile'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentlist" element={<StudentList />} />

        <Route path="/viewprofile/:id" element={<StudentProfile />} />
        
        <Route path="/login" element={<Login/> } />
      </Routes>




    </div>
  )
}

export default App