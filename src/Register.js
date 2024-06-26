import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://weatherapprepo-74z5.onrender.com/register', { user: username, pwd: password });
      setIsLoading(false);
      navigate('/login');
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 409) {
        setErrorMessage('User already exists. Please choose a different username.');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div style={{ width: '80%', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <h1 style={{ marginBottom: '40px', textAlign: 'center', color: '#007bff' }}>Weather Updates</h1>
      <div style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', background: '#f8f9fa' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#28a745' }}>Register</h2>
        {errorMessage && <p style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#d4edda', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#d4edda', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" disabled={isLoading} style={{ width: '80%', padding: '10px', borderRadius: '5px', border: 'none', background: '#28a745', color: '#fff', cursor: 'pointer', display: 'block', margin: '0 auto' }}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://weatherapprepo-74z5.onrender.com/register', { user: username, pwd: password });
//       // Redirect to login page after successful registration
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       setErrorMessage('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div style={{ width: '80%', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
//       <h1 style={{ marginBottom: '40px', textAlign: 'center', color: '#007bff' }}>Weather Updates</h1>
//       <div style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', background: '#f8f9fa' }}>
//         <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#28a745' }}>Register</h2>
//         {errorMessage && <p style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{errorMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '20px' }}>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#d4edda', boxSizing: 'border-box' }} />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#d4edda', boxSizing: 'border-box' }} />
//           </div>
//           <button type="submit" style={{ width: '80%', padding: '10px', borderRadius: '5px', border: 'none', background: '#28a745', color: '#fff', cursor: 'pointer', display: 'block', margin: '0 auto' }}>Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
