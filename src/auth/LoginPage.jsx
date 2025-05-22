import React, { useState } from 'react';

function LoginPage({ onLogin, onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const token = await authenticateUser(username, password);
      onLogin({ username, token });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
        </form>
        <div style={{ marginTop: 16 }}>
          <button className="link-btn" onClick={() => onSwitch('signup')}>Sign Up</button>
          <button className="link-btn" onClick={() => onSwitch('forgot')}>Forgot Password?</button>
        </div>
      </div>
    </div>
  );
}

async function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve('dummy-jwt-token-123456');
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 800);
  });
}

export default LoginPage;