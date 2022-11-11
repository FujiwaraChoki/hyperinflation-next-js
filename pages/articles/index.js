import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import articles from "../../components/db/articles";

export default function Home() {
  // How to split a string and replace the last 30 characters with "..."
  const truncate = (str) => {
    return str.length > 40 ? str.substring(0, 30) + "..." : str;
  };

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
              key={article["id"]}
              className={styles.card}
            >
              <h3>{article["title"]}</h3>
              <p>{truncate(article["content"])}</p>
            </Link>
          ))}
        </div>
      </main>
      <Link href="/" className={styles.backButton}>
        <i className="fas fa-arrow-left"></i>
      </Link>
    </div>
  );
}
