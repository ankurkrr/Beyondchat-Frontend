import React, { useState } from 'react';

function SignupPage({ onSignup, onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const token = await signupUser(username, password);
      onSignup({ username, token });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Sign Up</h2>
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
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
        </form>
        <div style={{ marginTop: 16 }}>
          <button className="link-btn" onClick={() => onSwitch('login')}>Back to Login</button>
        </div>
      </div>
    </div>
  );
}

async function signupUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'existingUser') {
        reject(new Error('User already exists'));
      } else {
        resolve('dummy-jwt-token-123456');
      }
    }, 800);
  });
}

export default SignupPage;