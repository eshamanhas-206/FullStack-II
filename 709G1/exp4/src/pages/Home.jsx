import React from 'react'
import { Link } from 'react-router';
import students from '../data/student.js';

function Home() {
  const activeStudents = students.filter((student) => student.status === 'Active').length;
  const inactiveStudents = students.filter((student) => student.status === 'Inactive').length;
  const graduatedStudents = students.filter((student) => student.status === 'Graduated').length;

  return (
    <div className="page-shell">
      <section className="home-hero-panel">
        <div className="home-copy surface-card home-copy-card">
          <span className="eyebrow">Student management system</span>
          <h1 className="section-title home-title">
            A calm, modern front door for the student records app.
          </h1>
          <p className="section-copy">
            Home focuses on orientation and quick access. Use it to understand the system, check the live snapshot, and jump into the dashboard.
          </p>

          <div className="hero-actions home-actions">
            <Link className="primary-button" to="/dashboard">
              Open Dashboard
            </Link>
            <Link className="secondary-button" to="/login">
              Login
            </Link>
          </div>

          <div className="home-note">
            Quick access, live counts, and a cleaner introduction to the system.
          </div>
        </div>

        <div className="home-side surface-card">
          <div className="home-side-header">
            <span className="badge soft">Live snapshot</span>
            <h2>Student status overview</h2>
            <p>These cards give a visual preview of the roster before you open the dashboard.</p>
          </div>

          <div className="home-metrics home-metrics-home">
            <div className="mini-card accent-card">
              <div className="mini-card-head">
                <span className="mini-label">Students</span>
                <span className="badge soft">Live</span>
              </div>
              <div className="mini-number">{students.length}</div>
            </div>

            <div className="mini-card accent-card green-card">
              <div className="mini-card-head">
                <span className="mini-label">Active</span>
                <span className="badge soft">Healthy</span>
              </div>
              <div className="mini-number">{activeStudents}</div>
            </div>

            <div className="mini-card accent-card amber-card">
              <div className="mini-card-head">
                <span className="mini-label">Inactive</span>
                <span className="badge soft">Needs attention</span>
              </div>
              <div className="mini-number">{inactiveStudents}</div>
            </div>

            <div className="mini-card accent-card purple-card">
              <div className="mini-card-head">
                <span className="mini-label">Graduated</span>
                <span className="badge soft">Progress</span>
              </div>
              <div className="mini-number">{graduatedStudents}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home