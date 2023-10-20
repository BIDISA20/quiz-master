// RegistrationPage.js
import React, { useState } from 'react';
import './registrationpage.css';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here (e.g., API call to create a new user)
    console.log('Registered with name:', name, 'email:', email, 'contactNo:', contactNo, 'password:', password);
  }

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact No"
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegistrationPage;
