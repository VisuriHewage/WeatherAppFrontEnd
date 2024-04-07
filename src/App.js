// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Map from './Map';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Use Navigate instead of Redirect */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<PrivateRoute />} /> {/* Use PrivateRoute directly */}
      </Routes>
    </Router>
  );
}


const PrivateRoute = () => {
  return isAuthenticated() ? <Map /> : <Navigate to="/login" />;
};

function isAuthenticated() {
  return !!localStorage.getItem('accessToken');
}

export default App;



