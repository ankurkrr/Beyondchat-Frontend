import React, { useState } from 'react';
import LoginPage from './auth/LoginPage';
import SignupPage from './auth/SignupPage';
import ForgotPasswordPage from './auth/ForgotPasswordPage';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [authPage, setAuthPage] = useState('login'); // 'login' | 'signup' | 'forgot'

  if (!user) {
    if (authPage === 'login') {
      return <LoginPage onLogin={setUser} onSwitch={setAuthPage} />;
    }
    if (authPage === 'signup') {
      return <SignupPage onSignup={setUser} onSwitch={setAuthPage} />;
    }
    if (authPage === 'forgot') {
      return <ForgotPasswordPage onSwitch={setAuthPage} />;
    }
  }

  return (
    <div className="App">
      <h1>Welcome, {user.username}</h1>
    </div>
  );
}

export default App;