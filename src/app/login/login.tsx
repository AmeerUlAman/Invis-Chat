import styles from './login.module.css';


const Login=()=>{
return(
    <div className={styles.loginwhole}>
        <center><h1>Log in</h1></center>
        
        <form className={styles.ver}>
           <div className={styles.wholefield}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={styles.field}  required/>
           </div>
           <div className={styles.wholefield}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className={styles.field}  required/>
           </div>
            <button type="submit" className={styles.loginbut}>Log in</button> 
            


        </form>
    </div>
);
}
export default Login;