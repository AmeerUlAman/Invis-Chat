import react from 'react';
import styles from './nav.module.css';
import Image from 'next/image';

const Nav=()=>{
 return(
<div className={styles.nav}>
    
<div  className={styles.logo}><Image src='/invislogo.png'  width={117} height={50} alt='Nigga'/></div>
<div className={styles.lognav}>
    <button className={styles.logbut}>Log in</button>
</div>
</div>

 ); 
}
export default Nav;