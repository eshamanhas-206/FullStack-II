import React from 'react';
import { Link, Outlet } from 'react-router';


function StudentList({students}) {
  return (
    <>
      <div className="student-list-container">
        <div className="student-list-header">
          <div>
            <span className="eyebrow">Roster</span>
            <h2 className="section-title" style={{ fontSize: '32px' }}>
              Student List
            </h2>
          </div>

          <div className="badge soft">
            {students.length} Students
          </div>
        </div>

        <div className="students-grid">

          {students.map((std) => (

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

              <div className="student-footer">

                <div className="student-grade">
                  Grade: <span className="grade">{std.grade}</span>
                </div>

                <Link
                  className="profile-btn"
                  to={`/dashboard/profile/${std.id}`}
                >
                  View Profile →
                </Link>

              </div>

            </div>

          ))}

        </div>

        <Outlet />

      </div>
    </>
  );
}

export default StudentList;