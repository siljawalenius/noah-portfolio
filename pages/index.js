import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import copy from "../content/copy.json";

import Collage from "../components/collage/Collage";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const COPY = copy.landing;
  const linkRef = useRef(null);
  const contentContainerRef = useRef(null);
  const [needsClear, setNeedsClear] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    setNeedsClear(true);
  };

  useEffect(() => {
    const linkEl = linkRef.current;
    linkEl.addEventListener("mouseover", () => {
      setIsHovered(true);
    });

    linkEl.addEventListener("mouseout", () => {
      if (isHovered) {
        setIsHovered(false);
      }
    });
  }, [isHovered]);

  useEffect(() => {
    // signature :)
    console.log("π₯₯ππΈππΊππππ₯βΊοΈπ₯₯ππΈππΊππππ₯βΊοΈ");
    console.log("β¨β¨ coded with love by @siljawalenius β¨β¨");
    console.log("β¨β¨ https://www.siljawalenius.com/ β¨β¨");
    console.log("π₯₯ππΈππΊππππ₯βΊοΈπ₯₯ππΈππΊππππ₯βΊοΈ");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{COPY.pageTitle}</title>
        <meta name="description" content={COPY.metaDescription} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Collage needsClear={needsClear} setNeedsClear={setNeedsClear} />

      <div className={styles.contentContainer} ref={contentContainerRef}>
        <div className={styles.topInfo}>
          <h1 className={styles.name}>{COPY.name}</h1>
          <p className={styles.playParagraph}>
            <span className={styles.desktopOnly}>{COPY.playDesktop}</span>
          </p>
          <h2 className={styles.title}>{COPY.title}</h2>
        </div>

        <footer className={styles.footer}>
          <div className={styles.mail}>
            <a href={COPY.mailAddy} target="_blank" rel="noreferrer">
              <p> {COPY.contact}</p>
            </a>
            <span className={styles.wave}>{COPY.wave}</span>
          </div>

          <button className={styles.button} onClick={handleClick}>
            <span className={styles.desktopOnly}>{COPY.clearDesktop}</span>
            <span className={styles.mobileOnly}> {COPY.clearMobile} </span>
          </button>

          <p> {COPY.year}</p>
        </footer>
      </div>

      <div className={styles.callOut}>
        <p>
          {COPY.callout}
          <span className={styles.singleLine}>
            <span className ={styles.beenText}>{COPY.calloutSingleLine.text}</span>
            
            {isHovered && (
              <span className={styles.flipEyes}>
                {COPY.calloutSingleLine.eyes}
              </span>
            )}
            {!isHovered && (
              <span className={styles.eyes}>
                {COPY.calloutSingleLine.eyes}
              </span>
            )}
            <a
              className={styles.linkWrap}
              href={COPY.calloutSingleLine.linkText}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.link} ref={linkRef}>
                {COPY.calloutSingleLine.link}
              </span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
