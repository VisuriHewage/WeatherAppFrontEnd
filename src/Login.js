import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://weatherapprepo-74z5.onrender.com/auth', { user: username, pwd: password });
      localStorage.setItem('accessToken', response.data.accessToken);
      // Redirect to map page
      navigate('/map');
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid Credentials.Please try again');
    }
  };

  const goToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <div style={{ width: '80%', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
  <h1 style={{ marginBottom: '40px', textAlign: 'center', color: '#007bff' }}>Weather Updates</h1>
  <div style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', background: '#f8f9fa' }}>
    <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#28a745' }}>Log into Proceed</h2>
    {errorMessage && <p style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{errorMessage}</p>}
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#d4edda', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#d4edda', boxSizing: 'border-box' }} />
      </div>
      <button type="submit" style={{ width: '80%', padding: '10px', borderRadius: '5px', border: 'none', background: '#28a745', color: '#fff', cursor: 'pointer', display: 'block', margin: '0 auto' }}>Login</button>
    </form>
    <p style={{ textAlign: 'center', marginTop: '10px' }}>or</p>
    {/* Button to navigate to the register page */}
    <button onClick={goToRegisterPage} style={{ width: '80%', padding: '10px', borderRadius: '5px', border: 'none', background: '#28a745', color: '#fff', cursor: 'pointer', display: 'block', margin: '10px auto' }}>Register</button>
  </div>
</div>


  );
}

export default Login;