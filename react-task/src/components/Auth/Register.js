import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2" />
      <button type="submit" className="mt-4 bg-green-500 text-white py-2">Register</button>
    </form>
  );
};

export default Register;
