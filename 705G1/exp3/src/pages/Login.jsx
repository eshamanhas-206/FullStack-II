import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ username, password })

    if (username == "admin" && password == "admin") {
      localStorage.setItem("islogged", true);
      window.location.href = "/dashboard"
    }
    else {
      alert("Username or password is incorrect")
    }

  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>

        <h2 style={styles.title}>Login</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f8',
  },

  form: {
    width: '350px',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },

  title: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#222',
  },

  inputGroup: {
    marginBottom: '18px',
  },

  label: {
    display: 'block',
    marginBottom: '7px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },

  input: {
    width: '100%',
    padding: '11px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '15px',
    outline: 'none',
  },

  button: {
    width: '100%',
    padding: '12px',
    marginTop: '8px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
}

export default Login