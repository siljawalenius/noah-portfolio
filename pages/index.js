import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import copy from "../content/copy.json";

import Collage from "../components/collage/Collage";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const COPY = copy.landing;
  const linkRef = useRef(null);
  const [needsClear, setNeedsClear] = useState(false);
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e) => {
    setNeedsClear(true)
  };

  useEffect(()=>{
    const linkEl = linkRef.current
    linkEl.addEventListener('mouseover', ()=>{
      setIsHovered(true)
    })

    linkEl.addEventListener('mouseout', ()=>{
      if(isHovered){
        setIsHovered(false)
      }
    })

    console.log(isHovered)
  },[isHovered])


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
          <p> 
            <span className={styles.desktopOnly}>
            click to play 🎲
            </span>

            <span className = {styles.mobileOnly}> 🎲 </span> 

          </p>
          <h2 className = {styles.title}>{COPY.title}</h2>
        </div>

        <footer className={styles.footer}>
          <a href="#">
            <p> {COPY.contact}</p>
          </a>

          <button className={styles.button} onClick ={handleClick}>
            <span className = {styles.desktopOnly}>clear playground!</span>
            <span className = {styles.mobileOnly}> 🧹 </span>
          </button>

          <p> {COPY.year}</p>
        </footer>
      </div>

      <div className={styles.callOut}>
        <p>
          {COPY.callout}
          {isHovered && <span className = {styles.flipEyes}> {COPY.eyes} </span> }
            {!isHovered && <span className = {styles.eyes}> {COPY.eyes} </span> }
          <a className = {styles.linkWrap} href={COPY.linkText} target="_blank" rel = "noreferrer">
            <span className={styles.link} ref={linkRef}>{COPY.link}</span>
          </a>
        </p>
      </div>
    </div>
  );
}
