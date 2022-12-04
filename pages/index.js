import Head from "next/head";
import party from "party-js";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Theme from "../components/Theme";
import Lottie from "react-lottie";
import animationData from "../public/moneyAnimation.json";
import animationData2 from "../public/inflation2.json";
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

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const description = document.querySelector("#project-description");
    const inflation2 = document.querySelector("#inflation2animation");
    const wrapperElement = document.querySelector("#wrapper");

    description.addEventListener("mouseover", () => {
      inflation2.style.display = "block";
      wrapperElement.style.backgroundColor = "#000000";
      wrapperElement.style.color = "#ffffff";
      wrapperElement.style.padding = "1rem";
    });

    description.addEventListener("mouseout", () => {
      inflation2.style.display = "none";
      wrapperElement.style.backgroundColor = "#ffffff";
      wrapperElement.style.color = "#000000";
      wrapperElement.style.padding = "0rem";
    });
  });

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
        <div
          className={styles.description}
          id="wrapper"
          style={{ transition: "all 0.5s" }}
        >
          <p id="project-description">
            Lernen Sie die Geschichte der Hyperinflation von 1923 kennen. Wie
            kam es dazu? Was waren die Ursachen? Wie hat sich die Inflation auf
            die Menschen ausgewirkt?
          </p>
          <div className={styles.hidden} id="inflation2animation">
            <Lottie options={defaultOptions2} height={200} width={200} />
          </div>
        </div>
        <br />
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
          style={{ marginTop: 30 }}
        />
        <Link
          href="/articles"
          className={styles.button}
          onClick={(e) => {
            party.confetti(e.target);
          }}
        >
          Zu den Artikeln
        </Link>
      </main>
    </>
  );
}
