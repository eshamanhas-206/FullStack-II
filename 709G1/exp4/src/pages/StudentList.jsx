import React from 'react';
import { Link, Outlet } from 'react-router';
import students from '../data/student.js';

function StudentList() {
  const [studentList, setStudentList] = React.useState(students);
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('All');
  const [formData, setFormData] = React.useState({
    name: '',
    age: '',
    email: '',
    address: '',
    course: '',
    grade: '',
    status: 'Active',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleAddStudent(event) {
    event.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: formData.name.trim(),
      age: Number(formData.age),
      email: formData.email.trim(),
      address: formData.address.trim(),
      course: formData.course.trim(),
      grade: formData.grade.trim(),
      status: formData.status,
    };

    setStudentList((current) => [newStudent, ...current]);
    setFormData({
      name: '',
      age: '',
      email: '',
      address: '',
      course: '',
      grade: '',
      status: 'Active',
    });
  }

  function handleDeleteStudent(id) {
    setStudentList((current) => current.filter((student) => student.id !== id));
  }

  const filteredStudents = studentList.filter((student) => {
    const matchesQuery =
      student.name.toLowerCase().includes(query.toLowerCase()) ||
      student.course.toLowerCase().includes(query.toLowerCase()) ||
      student.email.toLowerCase().includes(query.toLowerCase());

    const matchesStatus = statusFilter === 'All' || student.status === statusFilter;

    return matchesQuery && matchesStatus;
  });

  return (
    <>
      <div className="student-list-container">
        <div className="student-list-header">
          <div>
            <span className="eyebrow">Roster</span>
            <h2 className="section-title" style={{ fontSize: '32px' }}>
              Student List
            </h2>
            <p className="section-copy">
              Search by name, course, or email and filter by student status.
            </p>
          </div>

          <div className="badge soft">
            Showing {filteredStudents.length} of {studentList.length}
          </div>
        </div>

        <div className="student-toolbar surface-card">
          <div className="field field-inline">
            <label htmlFor="student-search">Search</label>
            <input
              id="student-search"
              type="text"
              placeholder="Search students"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div className="field field-inline">
            <label htmlFor="status-filter">Status</label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Graduated</option>
            </select>
          </div>
        </div>

        <form className="add-student-card surface-card" onSubmit={handleAddStudent}>
          <div className="add-student-header">
            <span className="badge soft">Add student</span>
            <h3>Quick new record</h3>
          </div>

          <div className="add-grid">
            <div className="field field-inline">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div className="field field-inline">
              <label htmlFor="age">Age</label>
              <input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange} required />
            </div>

            <div className="field field-inline">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="field field-inline">
              <label htmlFor="course">Course</label>
              <input id="course" name="course" value={formData.course} onChange={handleInputChange} required />
            </div>

            <div className="field field-inline">
              <label htmlFor="grade">Grade</label>
              <input id="grade" name="grade" value={formData.grade} onChange={handleInputChange} required />
            </div>

            <div className="field field-inline">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" value={formData.status} onChange={handleInputChange}>
                <option>Active</option>
                <option>Inactive</option>
                <option>Graduated</option>
              </select>
            </div>

            <div className="field field-inline add-wide">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
          </div>

          <button className="student-link add-button" type="submit">Add Student</button>
        </form>

        {filteredStudents.length === 0 ? (
          <div className="empty-state surface-card">
            <span className="badge soft">No results</span>
            <h3>No students match your filters</h3>
            <p>Try a different search term or switch the status filter back to All.</p>
          </div>
        ) : (
          <div className="students-grid">

            {filteredStudents.map((std) => (

              <div className="student-card" key={std.id}>
                <div className="student-top">

                  <div className="student-info">

                    <div className="student-avatar">
                      {std.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="student-name">
                        {std.name}
                      </h3>

                      <p className="student-id">
                        Student ID: #{std.id}
                      </p>
                    </div>

                  </div>

                  <span
                    className={`status ${std.status.toLowerCase()}`}
                  >
                    {std.status}
                  </span>

                </div>

                <div className="student-details">

                  <div className="detail-item">
                    <span className="detail-label">
                      Course
                    </span>

                    <span className="detail-value">
                      {std.course}
                    </span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">
                      Age
                    </span>

                    <span className="detail-value">
                      {std.age} Years
                    </span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">
                      Email
                    </span>

                    <span className="detail-value">
                      {std.email}
                    </span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">
                      Location
                    </span>

                    <span className="detail-value">
                      {std.address}
                    </span>
                  </div>

                </div>

                <div className="student-footer student-footer-actions">

                  <div className="student-grade">
                    Grade: <span className="grade">{std.grade}</span>
                  </div>

                  <div className="card-actions">
                    <Link
                      className="profile-btn"
                      to={`/dashboard/profile/${std.id}`}
                    >
                      Student Option
                    </Link>

                    <button
                      className="delete-btn"
                      type="button"
                      onClick={() => handleDeleteStudent(std.id)}
                    >
                      Delete
                    </button>
                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

        <Outlet />

      </div>
    </>
  );
}

export default StudentList;