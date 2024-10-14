import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./nav/nav";
import Helog from "./helog/helog";
import React from "react";
export default function Home() {
  return (
<main className={styles.mai} >

<Nav/>
{/* <hr></hr> */}
<Helog/>

</main>
  );
}
