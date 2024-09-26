import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2" />
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2">Login</button>
    </form>
  );
};

export default Login;
