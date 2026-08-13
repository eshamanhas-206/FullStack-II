import React from 'react'
import { Link } from 'react-router'
import students from '../data/student'
function StudentList() {
  return (
    <div>
      <h4>Student List</h4>
      {students.map((std,index) => (
        <div key={index}>
          <p>{std.name}
          <Link to ={`/viewprofile/${std.id}`}>View Profile</Link>
          </p>
          
        </div>
      )) }
    </div>
  )
}

export default StudentList