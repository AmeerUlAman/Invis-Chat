"use client";

import React, { useState } from 'react';
import styles from './helog.module.css';

function Signup() {
  const [butpress, setButPress] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleButPress = () => {
    setButPress(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/db', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password,phone }),
    });

    if (!response.ok) {
      console.error('Failed to submit');
      // Optionally handle the error further, e.g., show an alert or update UI
    } else {
      const data = await response.json();
      console.log('Success:', data);
      const url = new URL('/chatroom', window.location.origin);  
      url.searchParams.set('username', username.toString());
      window.location.href = url.toString(); 
    }
  }
  return (
    <>
      {butpress ? (
        <div className={styles.log}>
          <div className={styles.login}>
            <center><h1 style={{ color: 'white' }}>Join Us Today!</h1></center>
            <p style={{ color: 'white', fontSize: 'larger', marginBottom: '5px' }}>E-mail:</p>
            <form onSubmit={handleSubmit}>
              <div style={{ width: '100%' }}>
                <input 
                  type="email" 
                  placeholder='Enter your Email' 
                  className={styles.in} 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <button className={styles.spbutton} type='button' onClick={handleButPress}>Sign Up</button>
              </div>
              <p className={styles.existing}>Already have an account? <span style={{ color: 'rgb(0,118,255)' }}>Log in</span></p>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.log}>
          <div className={styles.login}>
            <center><h1 style={{ color: 'white' }}>Register Yourself</h1></center>
            <form onSubmit={handleSubmit}>
              <p style={{ color: 'white', fontSize: 'larger', marginBottom: '5px' }}>Username:</p>
              <div style={{ width: '100%' }}>
                <input 
                  type="text" 
                  placeholder='Enter your Username' 
                  className={styles.in} 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <p style={{ color: 'white', fontSize: 'larger', marginBottom: '5px' }}>E-mail:</p>
              <div style={{ width: '100%' }}>
                <input 
                  type="text" 
                  placeholder='Enter your Email' 
                  className={styles.in} 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <p style={{ color: 'white', fontSize: 'larger', marginBottom: '5px' }}>Password:</p>
              <div style={{ width: '100%' }}>
                <input 
                  type="password" 
                  placeholder='Create password' 
                  className={styles.in} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>

              <p style={{ color: 'white', fontSize: 'larger', marginBottom: '5px' }}>Confirm Password:</p>
              <div style={{ width: '100%' }}>
                <input 
                  type="password" 
                  placeholder='Re-enter Password' 
                  className={styles.in} 
                />
              </div>

              <p style={{ color: 'white', fontSize: 'larger', marginBottom: '5px' }}>Phone :</p>
              <div style={{ width: '100%' }}>
                <input 
                  type="text" 
                  placeholder='Enter your phone number' 
                  className={styles.in} 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>

              <div>
                <button className={styles.spbutton} type='submit'>Sign Up</button>
              </div>
              <p className={styles.existing}>Already have an account? <span style={{ color: 'rgb(0,118,255)' }}>Log in</span></p>
            </form>
          </div>
        </div>
        )}  
    </>
  );
}

export default Signup;
