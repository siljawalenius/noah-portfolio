import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import copy from "../content/copy.json";

import Collage from "../components/collage/Collage"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    console.log('ughh')
  })


  const COPY = copy.landing;
  return (
    <div className={styles.container}>
      <Head>
        <title>Noah Melrose</title>
        <meta name="description" content="Graphic Designer" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Collage/>

      <div className={styles.contentContainer}>
        <div className={styles.topInfo}>
          <h1 className={styles.name}>{COPY.name}</h1>
          <h2>{COPY.title}</h2>
        </div>

        <footer className={styles.footer}>
          <a href="#">
            <p> {COPY.contact}</p>
          </a>
          <p> {COPY.year}</p>
        </footer>
      </div>

      <div className={styles.callOut}>
        <p>
          {COPY.callout}
          <a href="#">
            <span className={styles.link}>{COPY.link}</span> 
          </a>
        </p>
      </div>

      <div className = {styles.image}>
        <img src = '../content/collageImg/Frame1.jpg' />
      </div>

    </div>
  );
}
