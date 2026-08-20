import React from "react";
import students from "../data/student";
import { Link, Outlet } from "react-router";

function Dashboard() {
  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          margin:0;
          background:#f4f7fb;
        }

        .dashboard{
          min-height:100vh;
          padding:40px;
          background:linear-gradient(135deg,#eef2ff,#f8fafc);
        }

        .title{
          font-size:34px;
          font-weight:bold;
          color:#1f2937;
          margin-bottom:10px;
        }

        .subtitle{
          color:#6b7280;
          margin-bottom:30px;
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
          margin-bottom:30px;
        }

        .card{
          background:#fff;
          padding:25px;
          border-radius:16px;
          box-shadow:0 10px 25px rgba(0,0,0,.08);
          transition:.3s;
        }

        .card:hover{
          transform:translateY(-6px);
        }

        .card h3{
          margin:0;
          color:#6b7280;
          font-size:16px;
        }

        .number{
          margin-top:15px;
          font-size:38px;
          font-weight:bold;
          color:#2563eb;
        }

        .green{
          color:#16a34a;
        }

        .red{
          color:#dc2626;
        }

        .btn{
          display:inline-block;
          margin-bottom:30px;
          text-decoration:none;
          padding:14px 28px;
          background:#2563eb;
          color:white;
          border-radius:10px;
          font-weight:bold;
          transition:.3s;
        }

        .btn:hover{
          background:#1d4ed8;
        }

        .content{
          background:white;
          padding:25px;
          border-radius:15px;
          box-shadow:0 10px 25px rgba(0,0,0,.08);
          margin-top:20px;
        }

        .footer{
          text-align:center;
          color:#6b7280;
          margin-top:30px;
        }
      `}</style>

      <div className="dashboard">
        
        <h1 className="title">📊 Student Dashboard</h1>
        
        <button onClick={() => {
          localStorage.removeItem("isLoggedIn")
          window.location.href="/home"
        }}>Logout</button>

        <p className="subtitle">Manage students and monitor statistics.</p>

        <div className="cards">
          <div className="card">
            <h3>Total Students</h3>
            <div className="number">{students.length}</div>
          </div>

          <div className="card">
            <h3>Active Students</h3>
            <div className="number green">{activeStudents}</div>
          </div>

          <div className="card">
            <h3>Inactive Students</h3>
            <div className="number red">{inactiveStudents}</div>
          </div>
        </div>

        <Link to="students" className="btn">
          View Students →
        </Link>

        <div className="content">
          <Outlet />
        </div>

        <div className="footer">
          © 2026 Student Management Dashboard
        </div>
      </div>
    </>
  );
}

export default Dashboard;