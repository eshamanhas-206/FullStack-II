import React from 'react'
import { useParams } from 'react-router'
function StudentProfile() {
  const { id } = useParams()
  return (
    <div>StudentProfile{id}</div>
  )
}

export default StudentProfile