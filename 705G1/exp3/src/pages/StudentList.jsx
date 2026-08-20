import React from "react";
import { Link } from "react-router";
import students from "../data/student";

function StudentList() {
  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Student List</h1>
          <p style={styles.subtitle}>
            Manage and view all registered students
          </p>
        </div>

        <div style={styles.totalBadge}>
          {students.length} Students
        </div>
      </div>

      {/* Student Cards */}
      <div style={styles.grid}>
        {students.map((std) => (
          <div key={std.id} style={styles.card}>

            {/* Top Section */}
            <div style={styles.topSection}>
              <div style={styles.avatar}>
                {std.name.charAt(0)}
              </div>

              <div style={styles.studentInfo}>
                <h2 style={styles.name}>{std.name}</h2>
                <p style={styles.email}>{std.email}</p>
              </div>

              <span
                style={{
                  ...styles.status,
                  backgroundColor:
                    std.status === "Active"
                      ? "#dcfce7"
                      : std.status === "Inactive"
                        ? "#fee2e2"
                        : "#fef3c7",

                  color:
                    std.status === "Active"
                      ? "#166534"
                      : std.status === "Inactive"
                        ? "#991b1b"
                        : "#92400e",
                }}
              >
                {std.status}
              </span>
            </div>

            {/* Details */}
            <div style={styles.details}>

              <div>
                <p style={styles.label}>Course</p>
                <p style={styles.value}>{std.course}</p>
              </div>

              <div>
                <p style={styles.label}>Grade</p>
                <p style={styles.grade}>{std.grade}</p>
              </div>

            </div>

            {/* Footer */}
            <div style={styles.footer}>
              <span style={styles.phone}>
                📞 {std.phone}
              </span>

              <Link
                to={`/dashboard/viewprofile/${std.id}`}
                style={styles.profileButton}
              >
                View Profile →
              </Link>
            </div>

          </div>
        ))}
      </div>

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
    marginBottom: "30px",
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

  totalBadge: {
    backgroundColor: "#eef2ff",
    color: "#4f46e5",
    padding: "10px 18px",
    borderRadius: "20px",
    fontWeight: "600",
    fontSize: "14px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "22px",
  },

  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "22px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
  },

  topSection: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#4f46e5",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },

  studentInfo: {
    flex: 1,
  },

  name: {
    margin: 0,
    fontSize: "18px",
    color: "#111827",
  },

  email: {
    margin: "5px 0 0",
    fontSize: "13px",
    color: "#6b7280",
  },

  status: {
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  details: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    marginTop: "22px",
    paddingTop: "18px",
    borderTop: "1px solid #f1f5f9",
  },

  label: {
    margin: 0,
    fontSize: "12px",
    color: "#9ca3af",
  },

  value: {
    margin: "5px 0 0",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },

  grade: {
    margin: "5px 0 0",
    fontSize: "16px",
    fontWeight: "700",
    color: "#4f46e5",
  },

  footer: {
    marginTop: "20px",
    paddingTop: "15px",
    borderTop: "1px solid #f1f5f9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  phone: {
    fontSize: "13px",
    color: "#6b7280",
  },

  profileButton: {
    textDecoration: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "9px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
  },
};

export default StudentList;