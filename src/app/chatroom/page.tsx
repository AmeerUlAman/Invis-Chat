"use client";

import React from "react"; 
import styles from "./chatroom.module.css" 
import Contdet from "./contdet";
import Chat from "./chat";


export default function Home(){


    return(
        <div className={styles.whole}>
    <div className={styles.contactsection}>
       
          <Contdet/>
       

    <div className={styles.gp}></div>

    <div className={styles.contacts}></div>

    <div className={styles.gp}></div>

    <div className={styles.userinfo}></div>
    </div>
    
    
   <Chat/>
    
        </div>
    );
}