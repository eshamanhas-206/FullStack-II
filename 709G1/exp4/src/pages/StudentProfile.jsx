import React from 'react';
import { Link, useParams } from 'react-router';
import students from '../data/student.js';

function StudentProfile() {
  const { id } = useParams();

  const student = students.find(
    (std) => std.id === Number(id)
  );

  // Student not found
  if (!student) {
    return (
      <>
        <div className="not-found">
          <span className="badge soft">Missing profile</span>
          <h2>Student Not Found</h2>
          <p>
            No student exists with ID #{id}
          </p>

          <Link className="back-btn" to="/dashboard/studentlist">
            ← Back to Students
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="profile-container">
        <div className="profile-header">

          <div>
            <span className="eyebrow">Profile</span>
            <h2 className="section-title" style={{ fontSize: '32px' }}>
              Student Profile
            </h2>

            <p className="section-copy">
              View complete student information in a structured, readable layout.
            </p>
          </div>

          <Link
            className="secondary-button"
            to="/dashboard/studentlist"
          >
            Back to Students
          </Link>

        </div>

        <div className="profile-card">

          <div className="profile-banner"></div>

          <div className="profile-main">

            <div className="profile-intro">

              <div className="profile-avatar">
                {student.name.charAt(0)}
              </div>

              <div>
                <h1 className="profile-name">
                  {student.name}
                </h1>

                <p className="profile-id">
                  Student ID: #{student.id}
                </p>
              </div>

              <span
                className={`profile-status ${student.status.toLowerCase()}`}
              >
                {student.status}
              </span>

            </div>

            <h3 className="details-title">
              Student Information
            </h3>

            <div className="details-grid">

              <div className="detail-box">
                <span className="detail-label">
                  Full Name
                </span>

                <span className="detail-value">
                  {student.name}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Age
                </span>

                <span className="detail-value">
                  {student.age} Years
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Course
                </span>

                <span className="detail-value">
                  {student.course}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Batch
                </span>

                <span className="detail-value">
                  {student.batch || 'N/A'}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Email
                </span>

                <span className="detail-value">
                  {student.email}
                </span>
              </div>

              <div className="detail-box grade-box">
                <div>
                  <span className="detail-label">
                    Grade
                  </span>

                  <span className="detail-value">
                    Academic Performance
                  </span>
                </div>

                <div className="grade-value">
                  {student.grade}
                </div>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Status
                </span>

                <span className="detail-value">
                  {student.status}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Address
                </span>

                <span className="detail-value">
                  {student.address}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default StudentProfile;