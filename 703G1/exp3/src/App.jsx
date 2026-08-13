import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import StudentList from "./pages/StudentList"
import StudentProfile from './pages/StudentProfile'
import ProtectedRoute from "./components/ProtectedRoute"
function App() {

  return (
    <>
      <NavBar />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
         
        } >
        <Route path="students" element={<StudentList />} />
        <Route path=":id" element={<StudentProfile />} />
          </Route>
       
       

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

      </Routes>


    </>
  )
}

export default App
