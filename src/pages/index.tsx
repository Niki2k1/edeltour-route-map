import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

export default function Home() {
  const Map = dynamic(
    () => import("../components/Map"),
    { ssr: false }
  );

  return (
    <>
      <Head>
        <title>Edeltour Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Map />
      </main>
    </>
  );
}
