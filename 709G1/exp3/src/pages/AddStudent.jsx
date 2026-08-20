import React, { useState } from "react";

function AddStudent({ addStudent }) {
    const [formData, setformData] = useState({
        name: "",
        age: "",
        email: "",
        address: "",
        course: "",
        grade: "",
        status: "Active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(formData)
        console.log("New Student:", FormData);

        // Later you can add this student to your students array/context
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h2>Add New Student</h2>
                <p className="form-subtitle">
                    Enter the student details below
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-grid">

                        {/* Name */}
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter student name"
                                required
                            />
                        </div>

                        {/* Age */}
                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Enter age"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        {/* Course */}
                        <div className="form-group">
                            <label>Course</label>
                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                placeholder="e.g. B.Tech CSE"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div className="form-group full-width">
                            <label>Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter address"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        {/* Grade */}
                        <div className="form-group">
                            <label>Grade</label>
                            <select
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Grade</option>
                                <option value="A+">A+</option>
                                <option value="A">A</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B">B</option>
                                <option value="B-">B-</option>
                                <option value="C+">C+</option>
                                <option value="C">C</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div className="form-group">
                            <label>Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Graduated">Graduated</option>
                            </select>
                        </div>

                    </div>

                    <div className="button-container">
                        <button type="submit" className="submit-btn">
                            Add Student
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
        .form-container {
          min-height: 100vh;
          padding: 40px;
          background: #f5f7fb;
        }

        .form-card {
          max-width: 850px;
          margin: 0 auto;
          padding: 32px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .form-card h2 {
          margin: 0;
          font-size: 28px;
          color: #1f2937;
        }

        .form-subtitle {
          margin: 8px 0 28px;
          color: #6b7280;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 14px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          transition: 0.2s;
          font-family: inherit;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-group textarea {
          resize: vertical;
        }

        .button-container {
          margin-top: 28px;
          display: flex;
          justify-content: flex-end;
        }

        .submit-btn {
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          background: #2563eb;
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        .submit-btn:hover {
          background: #1d4ed8;
        }

        @media (max-width: 650px) {
          .form-container {
            padding: 20px;
          }

          .form-card {
            padding: 22px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .full-width {
            grid-column: auto;
          }
        }
      `}</style>
        </div>
    );
}

export default AddStudent;