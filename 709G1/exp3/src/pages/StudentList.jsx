import React from 'react';
import { Link, Outlet } from 'react-router';


function StudentList({students}) {
  return (
    <>
      <style>{`
        .student-list-container {
          padding: 10px 0;
          font-family: Arial, sans-serif;
        }

        .student-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .student-list-title {
          margin: 0;
          font-size: 24px;
          color: #111827;
        }

        .student-list-count {
          background: #eef2ff;
          color: #4f46e5;
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .students-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .student-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          transition: all 0.2s ease;
        }

        .student-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border-color: #c7d2fe;
        }

        .student-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .student-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .student-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #eef2ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
        }

        .student-name {
          margin: 0;
          font-size: 17px;
          color: #111827;
        }

        .student-id {
          margin: 4px 0 0;
          font-size: 12px;
          color: #9ca3af;
        }

        .status {
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .status.active {
          background: #dcfce7;
          color: #15803d;
        }

        .status.inactive {
          background: #fee2e2;
          color: #dc2626;
        }

        .status.graduated {
          background: #fef3c7;
          color: #b45309;
        }

        .student-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 20px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-label {
          font-size: 11px;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-value {
          font-size: 13px;
          color: #374151;
          font-weight: 500;
        }

        .student-footer {
          border-top: 1px solid #f0f0f0;
          padding-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .student-grade {
          font-size: 13px;
          color: #6b7280;
        }

        .grade {
          color: #111827;
          font-weight: 700;
        }

        .profile-btn {
          text-decoration: none;
          background: #4f46e5;
          color: white;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .profile-btn:hover {
          background: #4338ca;
        }

        @media (max-width: 800px) {
          .students-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .student-list-header {
            align-items: flex-start;
            gap: 10px;
            flex-direction: column;
          }

          .student-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="student-list-container">

        {/* Header */}
        <div className="student-list-header">
          <div>
            <h2 className="student-list-title">
              Student List
            </h2>
          </div>

          <div className="student-list-count">
            {students.length} Students
          </div>
        </div>

        {/* Students */}
        <div className="students-grid">

          {students.map((std) => (

            <div className="student-card" key={std.id}>

              {/* Student Header */}
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

                {/* Status */}
                <span
                  className={`status ${std.status.toLowerCase()}`}
                >
                  {std.status}
                </span>

              </div>

              {/* Details */}
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

              {/* Footer */}
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