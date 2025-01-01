"use client";

import styles from "./login.module.css";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(""); // State for the logged-in username

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/elogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setLoggedInUser(data.username); // Set the logged-in username for display

        // Redirect to chatroom with username as a query parameter
        const url = new URL("/chatroom", window.location.origin);
        url.searchParams.set("username", data.username);
        window.location.href = url.toString();
      } else if (response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to log in. Please check your connection.");
    }
  };

  return (
    <div>
      <div className={styles.logo}>
        <center>
          <Image
            src="/invislogo.png"
            width={751}
            height={314}
            alt="invis"
            className={styles.logoimage}
          />
        </center>
      </div>
      <div className={styles.loginwhole}>
        <center>
          <h1 className={styles.title}>Log in</h1>
        </center>

        <form className={styles.ver} onSubmit={handleSubmit}>
          <div className={styles.wholefield}>
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username / Email"
              className={styles.field}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.wholefield}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className={styles.field}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>} {/* Display error messages */}

          <div className={styles.ex}>
            <p className={styles.existing}>
              Don't have an account?{" "}
              <span style={{ color: "rgb(0,118,255)" }}>Sign Up</span>
            </p>
          </div>
          <button type="submit" className={styles.loginbut}>
            Log in
          </button>
        </form>

        {loggedInUser && (
          <p className={styles.success}>
            Welcome, <strong>{loggedInUser}</strong>!
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
