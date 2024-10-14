import React from "react"; 
import styles from "./chatr.module.css"
export default function Home(){

    return(
        <div className={styles.whole}  >
    <div className={styles.contactsection}>
    <div className={styles.userinfo}></div>
    <div className={styles.gp}></div>
    <div className={styles.contacts}></div>
    <div className={styles.gp}></div>
    <div className={styles.userinfo}></div>
    </div>
    
    
    <div className={styles.ch}></div>
    
        </div>
    );
}