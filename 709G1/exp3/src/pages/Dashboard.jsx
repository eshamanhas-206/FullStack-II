import React from 'react';

import { Link, Outlet } from 'react-router';

function Dashboard({students}) {
  const activeStudents = students.filter(
    student => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    student => student.status === "Inactive"
  ).length;

  const graduatedStudents = students.filter(
    student => student.status === "Graduated"
  ).length;

  function handleLogout(){
    localStorage.removeItem("isLoggedIn")
    window.location.href="/home"
  }
  return (
    <>
      <style>{`
        .dashboard {
          min-height: 100vh;
          background: #f5f7fb;
          padding: 40px;
          font-family: Arial, sans-serif;
        }

        .dashboard-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 30px;
        }

        .dashboard-title {
          margin: 0;
          font-size: 32px;
          color: #1f2937;
        }

        .dashboard-subtitle {
          margin-top: 8px;
          color: #6b7280;
          font-size: 15px;
        }

        /* Statistics */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          padding: 22px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          border-left: 5px solid;
        }

        .stat-card.total {
          border-color: #4f46e5;
        }

        .stat-card.active {
          border-color: #22c55e;
        }

        .stat-card.inactive {
          border-color: #ef4444;
        }

        .stat-card.graduated {
          border-color: #f59e0b;
        }

        .stat-label {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .stat-number {
          font-size: 30px;
          font-weight: 700;
          color: #111827;
        }

        .dashboard-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          margin-bottom: 25px;
        }

        .card-title {
          margin: 0 0 5px;
          font-size: 20px;
          color: #111827;
        }

        .card-description {
          margin: 0 0 20px;
          color: #6b7280;
          font-size: 14px;
        }

        .student-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          background: #4f46e5;
          color: white;
          text-decoration: none;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .student-link:hover {
          background: #4338ca;
          transform: translateY(-1px);
        }

        .outlet-container {
          margin-top: 25px;
        }

        .divider {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin-top: 35px;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .dashboard {
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-title {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="dashboard">
        <div className="dashboard-container">

          {/* Header */}
          <div className="dashboard-header">
            <h1 className="dashboard-title">
              Dashboard
            </h1>
            <button onClick={handleLogout}>Logout</button>

            <p className="dashboard-subtitle">
              Manage and view student information
            </p>
          </div>

          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card total">
              <div className="stat-label">
                Total Students
              </div>

              <div className="stat-number">
                {students.length}
              </div>
            </div>

            <div className="stat-card active">
              <div className="stat-label">
                Active Students
              </div>

              <div className="stat-number">
                {activeStudents}
              </div>
            </div>

            <div className="stat-card inactive">
              <div className="stat-label">
                Inactive Students
              </div>

              <div className="stat-number">
                {inactiveStudents}
              </div>
            </div>

            <div className="stat-card graduated">
              <div className="stat-label">
                Graduated Students
              </div>

              <div className="stat-number">
                {graduatedStudents}
              </div>
            </div>

          </div>

          {/* Student Management */}
          <div className="dashboard-card">

            <h3 className="card-title">
              Student Management
            </h3>

            <p className="card-description">
              View the complete list of students and their profiles.
            </p>

            
            <Link
              className="student-link"
              to="addstudent"
             >
              👨‍🎓 Add Student +
            </Link>


            <Link
              className="student-link"
              to="studentlist"
            >
              👨‍🎓 View Student List →
            </Link>

          </div>

          {/* Nested Routes */}
          <div className="outlet-container">
            <Outlet />
          </div>

          <hr className="divider" />

        </div>
      </div>
    </>
  );
}

export default Dashboard;