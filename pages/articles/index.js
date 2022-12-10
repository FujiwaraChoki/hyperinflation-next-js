import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import articles from "../../components/db/articles";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  // Split string by number of words
  useEffect(() => {
    const body = document.querySelector("body");
    // Unhide Overflow
    body.style.overflowY = "scroll";
  });

  function getClass(article) {
    switch (article.id_num) {
      case 1:
        return styles.article1;
      case 2:
        return styles.article2;
      case 3:
        return styles.article3;
      case 4:
        return styles.article4;
      case 5:
        return styles.article5;
      case 6:
        return styles.article6;
      case 7:
        return styles.article7;
      case 8:
        return styles.article8;
      case 9:
        return styles.article9;
      case 10:
        return styles.article10;
      case 11:
        return styles.article11;
      case 12:
        return styles.article12;
      case 13:
        return styles.article13;
      case 14:
        return styles.article14;
      case 15:
        return styles.article15;
      case 16:
        return styles.article16;
    }
  }

  return (
    <div>
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
        <h1 className={styles.title}>Artikel</h1>
        <div className={styles.pagecontainer}>
          <div className={styles.listcontainer}>
            <h2>Legende</h2>
            <ul className={styles.list}>
              <li className={styles.erklärung}>Erklärung</li>
              <li className={styles.entstehung}>Entstehung</li>
              <li className={styles.währung}>Währungspolitik</li>
              <li className={styles.lander}>Ländervergleich</li>
              <li className={styles.bezug}>Aktualitätsbezug</li>
              <li className={styles.betroffen}>Wohlstandentwicklung</li>
              <li className={styles.quellen}>Quellenverzeichnis</li>
            </ul>
          </div>
          <div className={styles.grid}>
            {articles.map((article) => (
              <Link
                href={`/articles/${article["id"]}`}
                key={article["id_num"]}
                className={`${styles.card} ${getClass(article)}`}
              >
                <h3 className={styles.articleTitle}>{article["title"]}</h3>
                <p>{article["description"]}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
