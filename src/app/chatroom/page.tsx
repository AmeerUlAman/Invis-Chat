"use client";

import React, { useState } from "react";
import styles from "./chatroom.module.css";
import Contdet from "./contdet";
import Chat from "./chat";
import { Suspense } from "react";

interface User {
  id: string;
  username: string;
}

export default function Home() {
  const [searching, setsearching] = useState("");
  const [results, setresults] = useState<User[]>([]);
  const [saveuser, setsaveuser] = useState("");

  const handlesearching = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const query = event.target.value;
    setsearching(query);

    if (query.trim() === "" || query.length < 1) {
      setresults([]);
      return;
    }

    try {
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
        const data: { success: boolean; data: User[] } = await response.json();
        if (data.success) {
          setresults(data.data);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const setcontact = (username: string) => {
    setsaveuser(username);
    setsearching("");
    setresults([]);
  };

  return (
    <div className={styles.whole}>
      <div className={styles.contactsection}>
        <Suspense>
          <Contdet />
        </Suspense>

        <div className={styles.gp}></div>

        <div className={styles.contacts}>
          <input
            type="text"
            placeholder="Search Contacts..."
            onChange={handlesearching}
            className={styles.searchuser}
            value={searching}
            id="search"
          />

          <div className={styles.sca}>
            {results.length > 0 ? (
              results.map((user) => (
                <div key={user.id} className={styles.searchedcontacts}>
                  <p onClick={() => setcontact(user.username)}>{user.username}</p>
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

      <Chat usern={saveuser} />
    </div>
  );
}
