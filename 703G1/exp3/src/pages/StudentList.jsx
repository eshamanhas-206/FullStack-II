import React from "react";
import { Link, Outlet } from "react-router";
import students from "../data/student";

function StudentList() {
  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
    },

    heading: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#333",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
    },

    card: {
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      border: "1px solid #ddd",
    },

    avatar: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      background: "#0d6efd",
      color: "#fff",
      fontSize: "28px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 15px",
    },

    name: {
      margin: "10px 0 5px",
      color: "#222",
    },

    id: {
      color: "#666",
      marginBottom: "20px",
    },

    button: {
      display: "inline-block",
      textDecoration: "none",
      background: "#0d6efd",
      color: "#fff",
      padding: "10px 18px",
      borderRadius: "6px",
      fontWeight: "bold",
    },

    outlet: {
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎓 Student Directory</h2>

      <div style={styles.grid}>
        {students.map((student) => (
          <div key={student.id} style={styles.card}>
            <div style={styles.avatar}>
              {student.name.charAt(0).toUpperCase()}
            </div>

            <h3 style={styles.name}>{student.name}</h3>
            <p style={styles.id}>ID: {student.id}</p>

            <Link
              to={`/dashboard/${student.id}`}
              style={styles.button}
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>

      <div style={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default StudentList;