import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import copy from "../content/copy.json";

import Collage from "../components/collage/Collage";
import { useRef, useState } from "react";

export default function Home() {
  const COPY = copy.landing;

  const [needsClear, setNeedsClear] = useState(false);

  const handleClick = (e) => {
    setNeedsClear(true)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Noah Melrose</title>
        <meta name="description" content="Graphic Designer" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Collage needsClear = {needsClear} setNeedsClear={setNeedsClear} />

      <div className={styles.contentContainer}>
        <div className={styles.topInfo}>
          <h1 className={styles.name}>{COPY.name}</h1>
          {/* <button className={styles.play}> play 🎲</button> */}
          <p> click to play 🎲</p>
          <h2 className = {styles.title}>{COPY.title}</h2>
        </div>

        <footer className={styles.footer}>
          <a href="#">
            <p> {COPY.contact}</p>
          </a>

          <button className={styles.button} onClick ={handleClick}>
            clear playground!
          </button>

          <p> {COPY.year}</p>
        </footer>
      </div>

      <div className={styles.callOut}>
        <p>
          {COPY.callout}
          <a href={COPY.linkText} target="_blank" rel = "noreferrer">
            <span className={styles.link}>{COPY.link}</span>
          </a>
        </p>
      </div>
    </div>
  );
}
