import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import articles from "../../components/db/articles";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  // How to split a string and replace the last 30 characters with "..."
  const truncate = (str) => {
    return str.length > 40 ? str.substring(0, 80) + "..." : str;
  };

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
    }
  }

  function ifpicture(article) {
    switch (article.id_num) {
      case 1:
        return true;
      case 2:
        return true;
      case 3:
        return true;
      case 4:
        return true;
      case 5:
        return false;
      case 6:
        return false;
      case 7:
        return false;
      case 8:
        return true;
      case 9:
        return true;
      case 10:
        return false
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
        <h1 className={styles.title}>Alle Artikel</h1>
        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              href={`/articles/${article["id"]}`}
              key={article["id_num"]}
              className={`${styles.card} ${getClass(article)}`}
            >
              <h3>{article["title"]}</h3>
              <p>{truncate(article["content"])}</p>
              {
              ifpicture(article) ? (
                <Image src={article.image} width={200} height={200} />) : null
              }
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
