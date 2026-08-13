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
        <style>{`
          .not-found {
            background: white;
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          }

          .not-found h2 {
            margin-bottom: 10px;
            color: #111827;
          }

          .not-found p {
            color: #6b7280;
            margin-bottom: 20px;
          }

          .back-btn {
            display: inline-block;
            text-decoration: none;
            background: #4f46e5;
            color: white;
            padding: 10px 18px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
          }
        `}</style>

        <div className="not-found">
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
      <style>{`
        .profile-container {
          font-family: Arial, sans-serif;
          padding: 10px 0 30px;
        }

        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .profile-title {
          margin: 0;
          font-size: 24px;
          color: #111827;
        }

        .profile-subtitle {
          margin: 6px 0 0;
          color: #6b7280;
          font-size: 14px;
        }

        .back-link {
          text-decoration: none;
          color: #4f46e5;
          font-size: 14px;
          font-weight: 600;
        }

        .profile-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.07);
          border: 1px solid #e5e7eb;
        }

        .profile-banner {
          height: 110px;
          background: linear-gradient(
            135deg,
            #4f46e5,
            #6366f1
          );
        }

        .profile-main {
          padding: 0 30px 30px;
        }

        .profile-intro {
          display: flex;
          align-items: flex-end;
          gap: 18px;
          margin-top: -45px;
          margin-bottom: 30px;
        }

        .profile-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: white;
          border: 5px solid white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
          font-size: 32px;
          font-weight: 700;
        }

        .profile-name {
          margin: 0 0 5px;
          font-size: 25px;
          color: #111827;
        }

        .profile-id {
          margin: 0;
          color: #6b7280;
          font-size: 13px;
        }

        .profile-status {
          margin-left: auto;
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .profile-status.active {
          background: #dcfce7;
          color: #15803d;
        }

        .profile-status.inactive {
          background: #fee2e2;
          color: #dc2626;
        }

        .profile-status.graduated {
          background: #fef3c7;
          color: #b45309;
        }

        .details-title {
          margin: 0 0 18px;
          font-size: 18px;
          color: #111827;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .detail-box {
          padding: 18px;
          background: #f9fafb;
          border-radius: 12px;
          border: 1px solid #f0f0f0;
        }

        .detail-label {
          display: block;
          margin-bottom: 7px;
          font-size: 11px;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-value {
          font-size: 15px;
          font-weight: 600;
          color: #374151;
          word-break: break-word;
        }

        .grade-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .grade-value {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #eef2ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        @media (max-width: 650px) {
          .profile-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .profile-main {
            padding: 0 20px 25px;
          }

          .profile-intro {
            align-items: flex-start;
            flex-direction: column;
          }

          .profile-status {
            margin-left: 0;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="profile-container">

        {/* Header */}
        <div className="profile-header">

          <div>
            <h2 className="profile-title">
              Student Profile
            </h2>

            <p className="profile-subtitle">
              View complete student information
            </p>
          </div>

          <Link
            className="back-link"
            to="/dashboard/studentlist"
          >
            ← Back to Students
          </Link>

        </div>

        {/* Profile Card */}
        <div className="profile-card">

          <div className="profile-banner"></div>

          <div className="profile-main">

            {/* Profile Intro */}
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

            {/* Details */}
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