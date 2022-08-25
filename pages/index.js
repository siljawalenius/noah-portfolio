import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noah Melrose</title>
        <meta name="description" content="Graphic Designer" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <div className = {styles.topInfo}>
          <h1>Noah Melrose</h1>
          <h2>Designer & Creative</h2>
        </div>

      </main>

      <footer className={styles.footer}>
        <a href = '#'>  
          <p> say hello!</p>
        </a>
        <p> 2022 </p>
      </footer>
      
    </div>
  )
}
