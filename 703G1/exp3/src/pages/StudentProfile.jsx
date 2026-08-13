import React from "react";
import { useParams } from "react-router";
import students from "../data/student";

function StudentProfile() {
  const { id } = useParams();

  const student = students.find((std) => std.id === Number(id));

  if (!student) {
    return (
      <h2 style={{ textAlign: "center", color: "red", marginTop: "30px" }}>
        Student Not Found
      </h2>
    );
  }

  const styles = {
    container: {
      maxWidth: "450px",
      margin: "40px auto",
      padding: "25px",
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },

    avatar: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      backgroundColor: "#0d6efd",
      color: "#fff",
      fontSize: "36px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 20px",
    },

    title: {
      marginBottom: "20px",
      color: "#333",
    },

    row: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid #eee",
    },

    label: {
      fontWeight: "bold",
      color: "#555",
    },

    value: {
      color: "#222",
    },

    status: {
      display: "inline-block",
      marginTop: "20px",
      padding: "8px 16px",
      borderRadius: "20px",
      backgroundColor:
        student.status === "Active" ? "#28a745" : "#dc3545",
      color: "#fff",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.avatar}>
        {student.name.charAt(0).toUpperCase()}
      </div>

      <h2 style={styles.title}>{student.name}</h2>

      <div style={styles.row}>
        <span style={styles.label}>Student ID</span>
        <span style={styles.value}>{student.id}</span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Age</span>
        <span style={styles.value}>{student.age}</span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Course</span>
        <span style={styles.value}>{student.course}</span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Grade</span>
        <span style={styles.value}>{student.grade}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Grade</span>
        <span style={styles.value}>{student.city}</span>
      </div>

      <div style={styles.status}>
        {student.status}
      </div>
    </div>
  );
}

export default StudentProfile;