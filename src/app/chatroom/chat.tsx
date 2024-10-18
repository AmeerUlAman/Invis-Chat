import styles from "./chatroom.module.css";
import Image from "next/image";

const Chat=()=>{


return(
<div className={styles.chat}>
<div className={styles.messsagearea}>
<div className={styles.messaging}>
<input type="text" className={styles.messageinput} placeholder="Enter your message..." style={{paddingLeft:"15px"}}/>
<button className={styles.send} >
    {/* <center> <Image  src={'/sendbutton.svg'}height={40} width={40}alt="SEND"/></center> */}
   </button>
</div>
</div>

<div className={styles.contactinfo}>
 
</div>

</div>
);
}
export default Chat