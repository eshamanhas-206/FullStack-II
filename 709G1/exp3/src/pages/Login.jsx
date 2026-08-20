import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          background: #f4f7fb;
        }

        .login-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background:
            radial-gradient(circle at top left, #dbeafe 0%, transparent 35%),
            radial-gradient(circle at bottom right, #e0e7ff 0%, transparent 35%),
            #f8fafc;
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          padding: 42px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.12);
          backdrop-filter: blur(15px);
          animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          width: 58px;
          height: 58px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          font-size: 26px;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }

        .login-card h2 {
          margin: 0;
          text-align: center;
          color: #111827;
          font-size: 28px;
          font-weight: 700;
        }

        .subtitle {
          margin: 8px 0 32px;
          text-align: center;
          color: #64748b;
          font-size: 14px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          color: #334155;
          font-size: 14px;
          font-weight: 600;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          font-size: 17px;
        }

        .input-wrapper input {
          width: 100%;
          height: 50px;
          padding: 0 45px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          outline: none;
          background: #f8fafc;
          color: #1e293b;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .input-wrapper input::placeholder {
          color: #94a3b8;
        }

        .input-wrapper input:focus {
          background: white;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: #64748b;
          cursor: pointer;
          font-size: 16px;
        }

        .password-toggle:hover {
          color: #2563eb;
        }

        .login-button {
          width: 100%;
          height: 52px;
          margin-top: 8px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
          transition: all 0.2s ease;
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 25px rgba(37, 99, 235, 0.3);
        }

        .login-button:active {
          transform: translateY(0);
        }

        .footer-text {
          margin: 25px 0 0;
          text-align: center;
          color: #64748b;
          font-size: 14px;
        }

        .footer-text span {
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
        }

        .footer-text span:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 30px 22px;
            border-radius: 20px;
          }

          .login-card h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="login-container">
        <form className="login-card" onSubmit={handleSubmit}>

          <div className="logo">
            S
          </div>

          <h2>Welcome Back</h2>
          <p className="subtitle">
            Sign in to continue to your dashboard
          </p>

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <span className="input-icon">🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button className="login-button" type="submit">
            Sign In →
          </button>

          <p className="footer-text">
            Don't have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;