
import React from 'react';
import styles from './helog.module.css';
import Signup from './signup';

const helog = () => {

  return (
 <div className={styles.hero}>
      <div className={styles.intro}>
        <p className={styles.introtext}>The secure, simple and <span style={{color:'gold'}}>scheduled </span>
        communication you need</p>
<ul className={styles.introlist}>
<li>Simple</li><li>Secure</li><li>Schedulable</li>
</ul>
</div>
<Signup/>


 </div>
  )
}
export default helog
