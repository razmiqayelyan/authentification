import React, { useState } from 'react';
import { TextInput, PasswordInput, Button,  } from '@mantine/core';
import './signin.css';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('email: ',email, "password: ", password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Signin</h1>
      <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
        <TextInput
          className="signin-input"
          label="Email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          className="signin-input"
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className="signin-button" onClick={handleSubmit}>Войти</Button>
      </form>
    </div>
  );
}
