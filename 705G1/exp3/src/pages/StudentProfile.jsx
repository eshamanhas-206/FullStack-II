import React from "react";
import { Link, useParams } from "react-router";
import students from "../data/student";

function StudentProfile() {
  const { id } = useParams();

  const student = students.find((std) => {
    return std.id === Number(id);
  });

  if (!student) {
    return (
      <div style={styles.container}>
        <div style={styles.notFound}>
          <h2>Student Not Found</h2>
          <p>The student profile you are looking for does not exist.</p>

          <Link to="/studentlist" style={styles.backButton}>
            ← Back to Students
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <Link to="/studentlist" style={styles.backButton}>
          ← Back to Students
        </Link>
      </div>

      {/* Profile Card */}
      <div style={styles.profileCard}>

        {/* Profile Header */}
        <div style={styles.profileHeader}>

          <div style={styles.avatar}>
            {student.name.charAt(0)}
          </div>

          <div style={styles.nameSection}>
            <h1 style={styles.name}>{student.name}</h1>
            <p style={styles.email}>{student.email}</p>

            <span
              style={{
                ...styles.status,
                backgroundColor:
                  student.status === "Active"
                    ? "#dcfce7"
                    : student.status === "Inactive"
                      ? "#fee2e2"
                      : "#fef3c7",

                color:
                  student.status === "Active"
                    ? "#166534"
                    : student.status === "Inactive"
                      ? "#991b1b"
                      : "#92400e",
              }}
            >
              {student.status}
            </span>
          </div>

        </div>

        {/* Student Information */}
        <div style={styles.infoSection}>

          <h2 style={styles.sectionTitle}>
            Student Information
          </h2>

          <div style={styles.infoGrid}>

            <div style={styles.infoBox}>
              <p style={styles.label}>Full Name</p>
              <p style={styles.value}>{student.name}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>Email</p>
              <p style={styles.value}>{student.email}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>Phone</p>
              <p style={styles.value}>{student.phone}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>Address</p>
              <p style={styles.value}>{student.address}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>Course</p>
              <p style={styles.value}>{student.course}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>Grade</p>
              <p style={styles.grade}>{student.grade}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>Status</p>
              <p style={styles.value}>{student.status}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>Student ID</p>
              <p style={styles.value}>#{student.id}</p>
            </div>

          </div>

        </div>

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
    marginBottom: "20px",
  },

  backButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#4f46e5",
    fontWeight: "600",
    fontSize: "14px",
  },

  profileCard: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "35px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.06)",
  },

  profileHeader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    paddingBottom: "30px",
    borderBottom: "1px solid #e5e7eb",
  },

  avatar: {
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    backgroundColor: "#4f46e5",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "34px",
    fontWeight: "bold",
  },

  nameSection: {
    flex: 1,
  },

  name: {
    margin: 0,
    fontSize: "30px",
    color: "#111827",
  },

  email: {
    margin: "7px 0 12px",
    color: "#6b7280",
    fontSize: "14px",
  },

  status: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  infoSection: {
    marginTop: "30px",
  },

  sectionTitle: {
    fontSize: "20px",
    color: "#111827",
    marginBottom: "20px",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "18px",
  },

  infoBox: {
    backgroundColor: "#f8fafc",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #eef2f7",
  },

  label: {
    margin: 0,
    color: "#9ca3af",
    fontSize: "12px",
  },

  value: {
    margin: "7px 0 0",
    color: "#374151",
    fontSize: "15px",
    fontWeight: "600",
  },

  grade: {
    margin: "7px 0 0",
    color: "#4f46e5",
    fontSize: "20px",
    fontWeight: "700",
  },

  notFound: {
    maxWidth: "500px",
    margin: "100px auto",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.06)",
  },
};

export default StudentProfile;