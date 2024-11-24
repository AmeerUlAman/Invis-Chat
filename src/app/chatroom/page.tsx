"use client";

import React, { useState } from "react"; 
import styles from "./chatroom.module.css" 
import Contdet from "./contdet";
import Chat from "./chat";
import { Suspense } from "react";


export default function Home(){
  
const [searching, setsearching]=useState("");

const handlesearching= async (event:any)=>{
event.preventDefault("");
 
const response = await fetch('/api/search', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searching:event.target.value}),
  });
  if (!response.ok) {
    console.error('Failed to submit');
    
  } else {
    const data = await response.json();
    console.log('Success:', data,);

    
  }


}

    return(
        <div className={styles.whole}>
    <div className={styles.contactsection}>
    <Suspense><Contdet/></Suspense>
          
       

    <div className={styles.gp}></div>

    <div className={styles.contacts}>
<input type="text" placeholder="Search Contacts..." onChange={handlesearching} className={styles.searchuser} />
<p>{searching}</p>
    </div>

    <div className={styles.gp}></div>

    <div className={styles.userinfo}></div>
    </div>
    
    
   <Chat/>
    
        </div>
    );
}