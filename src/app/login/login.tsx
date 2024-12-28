import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.loginwhole}>
      <center>
        <h1>Log in</h1>
      </center>

      <form className={styles.ver}>
        <div className={styles.wholefield}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your Username / Email' 
            className={styles.field}
            required
          />
        </div>
        <div className={styles.wholefield}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Enter your Password' 
            className={styles.field}
            required
          />
        </div>
        <div className={styles.ex}>
        <p className={styles.existing}>Don't have an account? <span style={{ color: 'rgb(0,118,255)' }}>Sign Up</span></p>
         </div>
        <button type="submit" className={styles.loginbut}>
          Log in
        </button>
      </form>
    </div>
  );
};
export default Login;
