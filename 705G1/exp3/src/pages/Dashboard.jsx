import React from "react";
import students from "../data/student";
import { Link, Outlet } from "react-router";

function Dashboard() {
  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  function handleLogout() {
    localStorage.removeItem("islogged");
    window.location.href = "/";
  }

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Student Dashboard</h1>

          <p style={styles.subtitle}>
            Overview of student enrollment and status
          </p>
        </div>

        <div style={styles.headerActions}>
          <Link to="studentlist" style={styles.button}>
            View Students →
          </Link>

          <button onClick={handleLogout} style={styles.logoutButton}>
            <span style={styles.logoutIcon}>↪</span>
            Logout
          </button>
        </div>
      </div>

      {/* Cards */}
      <div style={styles.cards}>

        {/* Total Students */}
        <div style={styles.card}>
          <div style={{ ...styles.icon, backgroundColor: "#eef2ff" }}>
            👨‍🎓
          </div>

          <div>
            <p style={styles.cardTitle}>Total Students</p>
            <h2 style={styles.number}>{totalStudents}</h2>
            <p style={styles.description}>All registered students</p>
          </div>
        </div>

        {/* Active Students */}
        <div style={styles.card}>
          <div style={{ ...styles.icon, backgroundColor: "#ecfdf5" }}>
            ✓
          </div>

          <div>
            <p style={styles.cardTitle}>Active Students</p>
            <h2 style={styles.number}>{activeStudents}</h2>
            <p style={styles.description}>Currently active</p>
          </div>
        </div>

        {/* Inactive Students */}
        <div style={styles.card}>
          <div style={{ ...styles.icon, backgroundColor: "#fef2f2" }}>
            !
          </div>

          <div>
            <p style={styles.cardTitle}>Inactive Students</p>
            <h2 style={styles.number}>{inactiveStudents}</h2>
            <p style={styles.description}>Currently inactive</p>
          </div>
        </div>

      </div>

      {/* Status Summary */}
      <div style={styles.summary}>
        <h2 style={styles.summaryTitle}>Student Status</h2>

        <div style={styles.statusRow}>

          <div style={styles.statusItem}>
            <span style={styles.activeDot}></span>
            <span>Active</span>
            <strong>{activeStudents}</strong>
          </div>

          <div style={styles.statusItem}>
            <span style={styles.inactiveDot}></span>
            <span>Inactive</span>
            <strong>{inactiveStudents}</strong>
          </div>

        </div>
      </div>

      <Outlet />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
  },

  title: {
    margin: 0,
    fontSize: "32px",
    color: "#111827",
  },

  subtitle: {
    marginTop: "8px",
    color: "#6b7280",
    fontSize: "15px",
  },

  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  button: {
    textDecoration: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "12px 20px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(79, 70, 229, 0.25)",
  },

  logoutButton: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    padding: "11px 18px",
    border: "1px solid #fecaca",
    borderRadius: "10px",
    backgroundColor: "#fff1f2",
    color: "#dc2626",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  logoutIcon: {
    fontSize: "18px",
    fontWeight: "bold",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
  },

  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb",
  },

  icon: {
    width: "55px",
    height: "55px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },

  cardTitle: {
    margin: 0,
    color: "#6b7280",
    fontSize: "14px",
  },

  number: {
    margin: "5px 0",
    fontSize: "30px",
    color: "#111827",
  },

  description: {
    margin: 0,
    color: "#9ca3af",
    fontSize: "12px",
  },

  summary: {
    marginTop: "30px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
  },

  summaryTitle: {
    marginTop: 0,
    color: "#111827",
    fontSize: "20px",
  },

  statusRow: {
    display: "flex",
    gap: "40px",
  },

  statusItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#374151",
  },

  activeDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#22c55e",
  },

  inactiveDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ef4444",
  },
};

export default Dashboard;