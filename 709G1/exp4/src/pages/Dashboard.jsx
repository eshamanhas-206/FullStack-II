import React from 'react';
import students from '../data/student';
import { Link, Outlet, useNavigate } from 'react-router';

function Dashboard() {
  const navigate = useNavigate();
  const activeStudents = students.filter(
    student => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    student => student.status === "Inactive"
  ).length;

  const graduatedStudents = students.filter(
    student => student.status === "Graduated"
  ).length;

  function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  return (
    <>
      <div className="page-shell">
        <section className="dashboard-layout">
          <aside className="dashboard-rail surface-card">
            <span className="eyebrow">Control center</span>
            <h1 className="section-title dashboard-title">
              Dashboard
            </h1>
            <p className="section-copy dashboard-copy">
              This is the working area for student operations, status tracking, and roster management.
            </p>

            <div className="dashboard-actions">
              <Link className="student-link" to="studentlist">
                Open Student List →
              </Link>
              <button className="ghost-button" type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>

            <div className="dashboard-summary">
              <div className="stat-card total">
                <span className="stat-label">Total Students</span>
                <div className="stat-number">{students.length}</div>
              </div>

              <div className="stat-card active">
                <span className="stat-label">Active</span>
                <div className="stat-number">{activeStudents}</div>
              </div>

              <div className="stat-card inactive">
                <span className="stat-label">Inactive</span>
                <div className="stat-number">{inactiveStudents}</div>
              </div>

              <div className="stat-card graduated">
                <span className="stat-label">Graduated</span>
                <div className="stat-number">{graduatedStudents}</div>
              </div>
            </div>
          </aside>

          <main className="dashboard-workspace">
            <div className="dashboard-banner surface-card">
              <span className="badge soft">Student management</span>
              <h2>Operations, not orientation</h2>
              <p>
                The dashboard is now a darker, more structured workspace so it feels different from the lighter home screen.
              </p>
            </div>

            <div className="dashboard-panel surface-card">
              <div className="auth-card-header">
                <div>
                  <h2 style={{ marginTop: '0' }}>Roster area</h2>
                  <p>
                    Use the list below to add new students or remove old records.
                  </p>
                </div>
              </div>

              <Outlet />
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default Dashboard;