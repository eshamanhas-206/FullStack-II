import React from 'react'
import students from '../data/student'
import { Link } from 'react-router'
function Dashboard() {
  return (
    <div>
      <h4>Total Students : {students.length}</h4>
      <Link to="/studentlist">View Students</Link>
    </div>
  )
}

export default Dashboard