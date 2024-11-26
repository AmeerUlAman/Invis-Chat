"use client";

import React, { useState } from "react"; 
import styles from "./chatroom.module.css"; 
import Contdet from "./contdet";
import Chat from "./chat";
import { Suspense } from "react";

export default function Home() {
  const [searching, setsearching] = useState(""); // State for search input
  const [results, setresults] = useState([]);     // State for search results
  const [cont,setcon]=useState("");
  const [saveuser,setsaveuser]=useState("");

  // Handle search input
  const handlesearching = async (event:any) => {
    event.preventDefault(); // Prevent default behavior

    const query = event.target.value;
    setsearching(query); // Update the searching state

    // If the input is less than 2 characters or empty, reset results
    if (query.trim() === "" || query.length < 1) {
      setresults([]);
      return;
    }

    try {
      // Fetch results from the API
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searching: query }),
      });

      if (!response.ok) {
        console.error("Failed to submit");
      } else {
        const data = await response.json();
        console.log("Success:", data);

        // Update results if the response is successful
        if (data.success) {
          setresults(data.data);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
const setcontact=()=>{
const un=document.getElementById("selectcont")?.textContent;
console.log(un);
setsaveuser(un);
setsearching("");
setresults([]);
}
  return (
    <div className={styles.whole}>
      <div className={styles.contactsection}>
        <Suspense>
          <Contdet />
        </Suspense>

        <div className={styles.gp}></div>

        <div className={styles.contacts}>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Contacts..."
            onChange={handlesearching}
            className={styles.searchuser}
            value={searching}
            id="search"
          />
          {/* <p>{searching}</p> */}

          {/* Results Section */}
          <div className={styles.sca}>
            {results.length > 0 ? (
              results.map((user) => (
                <div key={user.id} className={styles.searchedcontacts}>

                  <p id="selectcont" onClick={setcontact}>{user.username}</p>
                
                  {/* <p>{user.email}</p> */}
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>

        <div className={styles.gp}></div>

        <div className={styles.userinfo}></div>
      </div>

      <Chat usern={saveuser}/>
    </div>
  );
}
