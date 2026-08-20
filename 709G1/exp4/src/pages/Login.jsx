import React, { useState } from "react";
import { useNavigate } from "react-router";


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  }

  return (
    <div className="page-shell">
      <div className="auth-layout">
        <section className="surface-card auth-panel">
          <span className="eyebrow">Secure access</span>
          <h1 className="section-title">
            Welcome back to the student hub.
          </h1>
          <p className="section-copy">
            Sign in to review the student roster, track academic progress, and open profile details in a cleaner workspace.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <strong>Fast navigation</strong>
              <span className="section-microcopy">Jump from overview to roster and profile views without extra clutter.</span>
            </div>
            <div className="feature-item">
              <strong>Data at a glance</strong>
              <span className="section-microcopy">Review status, grades, and contact details in well-structured cards.</span>
            </div>
            <div className="feature-item">
              <strong>Responsive layout</strong>
              <span className="section-microcopy">The same interface stays readable on laptops, tablets, and phones.</span>
            </div>
          </div>
        </section>

        <form className="surface-card auth-card" onSubmit={handleSubmit}>
          <div className="auth-card-header">
            <div>
              <span className="badge soft">Login</span>
              <h2 style={{ marginTop: '14px' }}>Sign in to continue</h2>
              <p>
                Use your credentials to access the student management dashboard.
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="auth-actions" style={{ marginTop: '8px' }}>
            <button className="primary-button" type="submit">
              Login
            </button>
          </div>

          <p className="auth-footer">
            Don't have an account? <span>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;