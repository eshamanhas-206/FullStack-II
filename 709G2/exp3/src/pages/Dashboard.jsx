import React from "react";
import students from "../data/student";
import { Link } from "react-router";

function Dashboard() {
  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const completedStudents = students.filter(
    (student) => student.status === "Completed"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  const droppedStudents = students.filter(
    (student) => student.status === "Dropped"
  ).length;
  function handlelogout() {
    localStorage.removeItem("loggedIn")
    window.location.href="/home"
  }
  //app.jsx
  // protectroutes.jsx
  // navbar.jsx
  // dashboard.js
  // nofound.jsx
  return (
    <div style={styles.dashboard}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <p style={styles.welcome}>Welcome back 👋
            <button onClick={handlelogout}>Logout</button>
          </p>
         
          
          <h1 style={styles.title}>Student Dashboard</h1>
          <p style={styles.subtitle}>
            Manage students and track their academic progress.
          </p>
        </div>

        <Link to="/studentlist" style={styles.viewButton}>
          View Students →
        </Link>
      </div>

      {/* Statistics Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <div style={{ ...styles.icon, ...styles.blueIcon }}>👨‍🎓</div>
          <div>
            <p style={styles.cardLabel}>Total Students</p>
            <h2 style={styles.cardNumber}>{students.length}</h2>
            <span style={styles.cardInfo}>All registered students</span>
          </div>
        </div>

        <div style={styles.card}>
          <div style={{ ...styles.icon, ...styles.greenIcon }}>✓</div>
          <div>
            <p style={styles.cardLabel}>Active Students</p>
            <h2 style={styles.cardNumber}>{activeStudents}</h2>
            <span style={styles.cardInfo}>Currently enrolled</span>
          </div>
        </div>

        <div style={styles.card}>
          <div style={{ ...styles.icon, ...styles.purpleIcon }}>🎓</div>
          <div>
            <p style={styles.cardLabel}>Completed</p>
            <h2 style={styles.cardNumber}>{completedStudents}</h2>
            <span style={styles.cardInfo}>Courses completed</span>
          </div>
        </div>

        <div style={styles.card}>
          <div style={{ ...styles.icon, ...styles.orangeIcon }}>⚠</div>
          <div>
            <p style={styles.cardLabel}>Other Status</p>
            <h2 style={styles.cardNumber}>
              {inactiveStudents + droppedStudents}
            </h2>
            <span style={styles.cardInfo}>
              Inactive / Dropped
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div style={styles.contentGrid}>
        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h3 style={styles.panelTitle}>Student Overview</h3>
              <p style={styles.panelSubtitle}>
                Current student distribution
              </p>
            </div>
          </div>

          <div style={styles.statusRow}>
            <div style={styles.statusLeft}>
              <span style={{ ...styles.dot, background: "#22c55e" }} />
              <span>Active</span>
            </div>
            <strong>{activeStudents}</strong>
          </div>

          <div style={styles.statusRow}>
            <div style={styles.statusLeft}>
              <span style={{ ...styles.dot, background: "#8b5cf6" }} />
              <span>Completed</span>
            </div>
            <strong>{completedStudents}</strong>
          </div>

          <div style={styles.statusRow}>
            <div style={styles.statusLeft}>
              <span style={{ ...styles.dot, background: "#f59e0b" }} />
              <span>Inactive</span>
            </div>
            <strong>{inactiveStudents}</strong>
          </div>

          <div style={styles.statusRow}>
            <div style={styles.statusLeft}>
              <span style={{ ...styles.dot, background: "#ef4444" }} />
              <span>Dropped</span>
            </div>
            <strong>{droppedStudents}</strong>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={styles.panel}>
          <h3 style={styles.panelTitle}>Quick Actions</h3>
          <p style={styles.panelSubtitle}>
            Quickly access student information.
          </p>

          <Link to="/studentlist" style={styles.action}>
            <span style={styles.actionIcon}>👥</span>
            <div>
              <strong>Student List</strong>
              <p style={styles.actionText}>
                View all students
              </p>
            </div>
            <span style={styles.arrow}>→</span>
          </Link>

          <Link to="/studentlist" style={styles.action}>
            <span style={styles.actionIcon}>📚</span>
            <div>
              <strong>Courses</strong>
              <p style={styles.actionText}>
                Explore student courses
              </p>
            </div>
            <span style={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    minHeight: "100vh",
    background: "#f5f7fb",
    padding: "35px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#172033",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    gap: "20px",
  },

  welcome: {
    margin: "0 0 5px",
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "500",
  },

  title: {
    margin: "0",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
  },

  subtitle: {
    margin: "7px 0 0",
    color: "#64748b",
    fontSize: "15px",
  },

  viewButton: {
    background: "#2563eb",
    color: "white",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    boxShadow: "0 5px 15px rgba(37, 99, 235, 0.2)",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    marginBottom: "25px",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e8edf5",
    borderRadius: "16px",
    padding: "22px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 5px 20px rgba(15, 23, 42, 0.04)",
  },

  icon: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },

  blueIcon: {
    background: "#e8f0ff",
  },

  greenIcon: {
    background: "#e9f9ef",
  },

  purpleIcon: {
    background: "#f1eaff",
  },

  orangeIcon: {
    background: "#fff4df",
  },

  cardLabel: {
    margin: "0 0 4px",
    fontSize: "13px",
    color: "#64748b",
    fontWeight: "500",
  },

  cardNumber: {
    margin: "0",
    fontSize: "27px",
    fontWeight: "700",
  },

  cardInfo: {
    fontSize: "11px",
    color: "#94a3b8",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "20px",
  },

  panel: {
    background: "#ffffff",
    border: "1px solid #e8edf5",
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "0 5px 20px rgba(15, 23, 42, 0.04)",
  },

  panelTitle: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "650",
  },

  panelSubtitle: {
    margin: "5px 0 20px",
    fontSize: "13px",
    color: "#94a3b8",
  },

  statusRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eef2f7",
    fontSize: "14px",
  },

  statusLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#475569",
  },

  dot: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
  },

  action: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    textDecoration: "none",
    color: "#172033",
    padding: "15px",
    border: "1px solid #eef2f7",
    borderRadius: "12px",
    marginTop: "12px",
  },

  actionIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },

  actionText: {
    margin: "3px 0 0",
    color: "#94a3b8",
    fontSize: "12px",
  },

  arrow: {
    marginLeft: "auto",
    color: "#64748b",
    fontSize: "18px",
  },
};

export default Dashboard;