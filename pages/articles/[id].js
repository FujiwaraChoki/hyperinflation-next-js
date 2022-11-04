import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import { useRouter } from "next/router";
import { useEffect } from "react";
import articles from "../../components/db/articles";

export default function Article() {
  let info = articles.find((article) => article.id === useRouter().query.id);
  let title = "Etwas ist schief gelaufen...";
  let content = "Bitte kontaktieren Sie den Administrator.";

  if (info) {
    title = info.title;
    content = info.content;
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
        <h1 className={styles.title}>{title}</h1>
        <br />
        <p className={styles.articleText}>{content}</p>
      </main>
      <Link href="/articles" className={styles.backButton}>
        <i className="fas fa-arrow-left"></i>
      </Link>
    </div>
  );
}
