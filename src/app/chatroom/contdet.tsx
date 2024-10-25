import { useSearchParams } from 'next/navigation';
import styles from './chatroom.module.css';

const Contdet=()=>{

 
    const searchParams = useSearchParams();
    const username = searchParams.get('username'); // Get the price from query parameters
    

    return(
        <div className={styles.userinfo}>

            <div className={styles.centered}>
            <div className={styles.image}></div>      
 <p style={{margin:"0px"}} className={styles.weluser}>Welcome, {username}</p>
</div>
</div>

    );
}
export default Contdet;