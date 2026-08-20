import React from 'react'
import { Link } from 'react-router';
import students from '../data/student.js';

function Home() {
  const activeStudents = students.filter((student) => student.status === 'Active').length;
  const graduatedStudents = students.filter((student) => student.status === 'Graduated').length;

  return (
    <div className="page-shell">
      <section className="surface-card hero-card home-hero">
        <div className="home-copy">
          <span className="eyebrow">Student management system</span>
          <h1 className="section-title">
            Organize student records with a cleaner, sharper dashboard.
          </h1>
          <p className="section-copy">
            Browse the roster, open detailed student profiles, and review status, grade, and contact information in one polished workspace.
          </p>

          <div className="hero-actions" style={{ marginTop: '24px' }}>
            <Link className="primary-button" to="/dashboard">
              Open Dashboard
            </Link>
            <Link className="secondary-button" to="/login">
              Login
            </Link>
          </div>
        </div>

        <div className="home-metrics">
          <div className="mini-card">
            <div className="mini-card-head">
              <span className="mini-label">Students</span>
              <span className="badge soft">Live</span>
            </div>
            <div className="mini-number">{students.length}</div>
          </div>

          <div className="mini-card">
            <div className="mini-card-head">
              <span className="mini-label">Active</span>
              <span className="badge soft">Healthy</span>
            </div>
            <div className="mini-number">{activeStudents}</div>
          </div>

          <div className="mini-card">
            <div className="mini-card-head">
              <span className="mini-label">Graduated</span>
              <span className="badge soft">Progress</span>
            </div>
            <div className="mini-number">{graduatedStudents}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home