import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Theme from "../components/Theme";
import Lottie from "react-lottie";
import animationData from '../public/moneyAnimation.json';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflowY = "hidden";
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Head>
        <title>Hyperinflation</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Nav></Nav>
      <Theme></Theme>
      <main className={styles.main}>
        <h1 className={styles.title}>Die Hyperinflation von 1923</h1>
        <br />
        <p className={styles.articleText}>
          Lernen Sie die Geschichte der Hyperinflation von 1923 kennen. Wie kam
          es dazu? Was waren die Ursachen? Wie hat sich die Inflation auf die
          Menschen ausgewirkt?
        </p>
        <br />
        <Lottie options={defaultOptions} height={200} width={200} style={{ marginTop: 30}}/>
        <Link href="/articles" className={styles.button}>
          Zu den Artikeln
        </Link>
      </main>
    </>
  );
}
