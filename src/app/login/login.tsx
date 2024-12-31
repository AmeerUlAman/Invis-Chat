"use client";
 
import styles from "./login.module.css";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/elogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usermail, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);

        // Redirect to chatroom with usermail
        const url = new URL("/chatroom", window.location.origin);
        url.searchParams.set("usermail", usermail.toString());
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
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Username / Email"
              className={styles.field}
              onChange={(e) => setUsermail(e.target.value)}
              required
            />
          </div>
          <div className={styles.wholefield}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className={styles.field}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Display error message */}
          {error && <p className={styles.error}>{error}</p>}

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
      </div>
    </div>
  );
};

export default Login;
