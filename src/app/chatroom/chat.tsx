"use client";

import styles from "./chatroom.module.css";
import Image from "next/image";
import React, { useState } from "react";

interface ChatProps {
  usern: string; // Explicitly define 'usern' as a string
}

const Chat: React.FC<ChatProps> = ({ usern }) => {
  const [messin, setmessin] = useState("");
  const [printval, setprintval] = useState("");

  const handlemessin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setmessin(event.target.value);
  };

  const print = () => {
    setprintval(messin);
  };

  return (
    <div className={styles.chatscreen}>
      <div className={styles.contactinfo}>
        <div className={styles.profile}></div>
        <div className={styles.username}>{usern}</div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.chatareawhole}>
        <div className={styles.messagingsendingmodule}>
          <input
            type="text"
            className={styles.messageinput}
            placeholder="Enter your message..."
            style={{ paddingLeft: "15px" }}
            onChange={handlemessin}
          />
          <button className={styles.send} onClick={print}></button>
        </div>
        <div className={styles.chatarea}>
          <div className={styles.chat}> MESSAGE : {printval}</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
