import React from 'react';

function Login() {



  
  return (
    <>
      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f7fb;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          background: white;
          padding: 35px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          box-sizing: border-box;
        }

        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .login-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          border-radius: 50%;
          background: #eef2ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .login-title {
          margin: 0;
          color: #111827;
          font-size: 28px;
        }

        .login-subtitle {
          margin: 8px 0 0;
          color: #6b7280;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: #374151;
          font-size: 14px;
          font-weight: 600;
        }

        .form-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #d1d5db;
          border-radius: 9px;
          outline: none;
          font-size: 14px;
          box-sizing: border-box;
          transition: 0.2s ease;
        }

        .form-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .login-button {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 9px;
          background: #4f46e5;
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .login-button:hover {
          background: #4338ca;
        }

        .login-footer {
          text-align: center;
          margin-top: 25px;
          color: #9ca3af;
          font-size: 13px;
        }
      `}</style>

      <div className="login-page">

        <div className="login-card">

          <div className="login-header">

            <div className="login-icon">
              🔐
            </div>

            <h1 className="login-title">
              Welcome Back
            </h1>

            <p className="login-subtitle">
              Login to your Student Management System
            </p>

          </div>

          <form>

            <div className="form-group">
              <label className="form-label">
                Username
              </label>

              <input
                className="form-input"
                type="text"
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Password
              </label>

              <input
                className="form-input"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button
              className="login-button"
              type="submit"
            >
              Login
            </button>

          </form>

          <div className="login-footer">
            Student Management System
          </div>

        </div>

      </div>
    </>
  );
}

export default Login;