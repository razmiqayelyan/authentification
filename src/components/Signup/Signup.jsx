import React, { useState } from 'react';
import {  PasswordInput, Button, Radio, Group, rem} from '@mantine/core';
import './signup.css'
import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';


export default function Signup({ onSubmit }) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = () => {
      onSubmit({ name, nickname, email, gender, password, confirmPassword });
      setName('');
        setNickname('');
        setEmail('');
        setGender('');
        setPassword('');
        setConfirmPassword('');
    };
    let icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  
    return (
      <div className="signup-container">
        <h1 className="signup-title">Signup</h1>
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <TextInput
            className="signup-input"
            label="Full Name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextInput
            className="signup-input"
            label="Nickname"
            placeholder="@nickname"
            value={nickname}
            leftSection={icon}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <TextInput
            className="signup-input"
            label="Email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Group className="signup-gender-group">
            <Radio
            style={{maxWidth:"15px", color:"skyblue"}}
              className="signup-radio"
              label="Male"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            <Radio
            style={{maxWidth:"15px", color:"pink"}}
              className="signup-radio"
              label="Female"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
          </Group>
          <PasswordInput
            className="signup-input"
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <PasswordInput
            className="signup-input"
            label="Confirm Password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button className="signup-button" onClick={handleSubmit}>Зарегистрироваться</Button>
        </form>
      </div>
    );
}
