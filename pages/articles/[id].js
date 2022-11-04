import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import { useRouter } from "next/router";
import articles from "../../components/db/articles";

export default function ArticlesPage() {
  const router = useRouter();
  const { id } = router.query;

  const article = articles.find((article) => article.id === id);
  console.log(article);

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
        <h1 className={styles.title}>{article["title"]}</h1>
        <br />
        <p className={styles.articleText}>{article["content"]}</p>
      </main>
      // Back button
      <Link href="/articles">
        <a className={styles.backButton}>
          <i className="fas fa-arrow-left"></i>
        </a>
      </Link>
    </div>
  );
}
