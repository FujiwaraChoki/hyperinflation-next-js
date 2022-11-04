import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Nav from '../../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hyperinflation</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Alle Artikel:
        </h1>

        <div className={styles.grid}>
            <Link href="/articles/1923" className={styles.card}>
                    <h2>1923 &rarr;</h2>
                    <p>Die Hyperinflation von 1923</p>
            </Link>
            <Link href="/articles/1924"className={styles.card}>
                    <h2>1924 &rarr;</h2>
                    <p>Die Hyperinflation von 1924</p>
            </Link>
        </div>
      </main>
    </div>
  )
}
