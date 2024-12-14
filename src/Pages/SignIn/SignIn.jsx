import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login
  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password!');
      return;
    }
    const storedUserData = localStorage.getItem('userData');

    if (!storedUserData) {
      setError('No user is registered!');
      return;
    }

    let parsedUserData;
    try {
      parsedUserData = JSON.parse(storedUserData);
    } catch (e) {
      console.error('Error parsing user data:', e);
      setError('An error occurred while retrieving user data.');
      return;
    }

    const { storedEmail, storedPassword, storedName } = parsedUserData;

    if (email === storedEmail && password === storedPassword) {
      console.log('Logged in successfully with', storedName);
      setError('');
      navigate('/home');
    } else {
      setError('Incorrect email or password!');
    }
  };

  return (
    <div className="model-container">
      <div className="card-title fw600">Login</div>
      <div className="model">

      
      <h3 className="model-title fw600">Login</h3>
   
      <code>
      <div className="model-input-group">
        <label className="model-label">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="model-input"
        />
      </div>
      <div className="model-input-group">
        <label className="model-label">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="model-input"
        />
      </div>
      
      {error && <p className="model-error">{error}</p>}

      <div className="model-buttons">
        <button className="model-btn" onClick={handleLogin}>Login</button>
        <button className="model-btn" onClick={() => navigate('/signup')} style={{backgroundColor:"#a1ccd2",color:"#24606d"}}>Register</button>
      </div>
      </code>
      </div>
    </div>
  );
};

export default SignIn;
