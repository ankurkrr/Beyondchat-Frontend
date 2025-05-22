import React, { useState } from 'react';

function ForgotPasswordPage({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const msg = await resetPassword(username);
      setMessage(msg);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
          {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
          {message && <div style={{ color: 'green', marginTop: 10 }}>{message}</div>}
        </form>
        <div style={{ marginTop: 16 }}>
          <button className="link-btn" onClick={() => onSwitch('login')}>Back to Login</button>
        </div>
      </div>
    </div>
  );
}

async function resetPassword(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user') {
        resolve('Password reset link sent to your email');
      } else {
        reject(new Error('User not found'));
      }
    }, 800);
  });
}

export default ForgotPasswordPage;