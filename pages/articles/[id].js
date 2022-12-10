import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import { useRouter } from "next/router";
import articles from "../../components/db/articles";
import NextAndBack from "../../components/NextAndBack";
import { useEffect } from "react";

const renderImages = (images) => {
  return images.map((image) => {
    return (
      <Image
        width={image.width}
        height={image.height}
        src={image.src}
        alt={image.src}
        className={styles.image}
      />
    );
  });
};

export default function Article() {
  let info = articles.find((article) => article.id === useRouter().query.id);

  let title = "Etwas ist schief geloffen...";
  let content = "Bitte kontaktieren Sie den Administrator.";
  let firstLetter, rest, id_num, images;

  if (info) {
    id_num = info.id_num;
    title = info.title;
    if (title === "Quellen") {
      content = info.quellen;
    } else {
      content = info.content;
      firstLetter = content.charAt(0);
      rest = content.slice(1);
    }
    images = info.images;
  }

  const renderMultipleQuellen = (quellen) => {
    return quellen.map((quelle) => {
      if (quelle.name === "Zentralbanken") {
        // Render link, link2 and link3
        return (
          <div className={styles.quelle}>
            <p className={styles.quelleName}>{quelle.name}</p>
            <p>
              <a
                href={quelle.link}
                target="_blank"
                rel="noreferrer"
                className={styles.quelleLink}
              >
                {quelle.link}
              </a>
              <br />
              <a
                href={quelle.link2}
                target="_blank"
                rel="noreferrer"
                className={styles.quelleLink}
              >
                {quelle.link}
              </a>
              <br />
              <a
                href={quelle.link3}
                target="_blank"
                rel="noreferrer"
                className={styles.quelleLink}
              >
                {quelle.link3}
              </a>
            </p>
          </div>
        );
      } else {
        // Render link
        return (
          <div className={styles.quelle}>
            <p className={styles.quelleName}>{quelle.name}</p>
            <p>
              <a
                href={quelle.link}
                target="_blank"
                rel="noreferrer"
                className={styles.quelleLink}
              >
                {quelle.link}
              </a>
            </p>
          </div>
        );
      }
    });
  };

  if (title === "Quellen") {
    return (
      <div>
        <Head>
          <title>{title}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <Nav />
        <Theme></Theme>
        <main className={styles.main}>
          <h1 className={styles.title}>{title}</h1>
          <br />
          <div className={styles.contentWrapper}>
            <p className={styles.articleText}>
              {renderMultipleQuellen(content)}
            </p>
            <br />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Nav />
      <Theme></Theme>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <br />
        <div className={styles.contentWrapper}>
          <p className={styles.articleText}>
            {/* If first Letter is a quotation mark, don't make a span */}
            {firstLetter === "“" ? (
              <span>{firstLetter}</span>
            ) : (
              <span className={styles.firstLetter}>{firstLetter}</span>
            )}
            {rest}
          </p>
        </div>
        <div className={styles.imagesWrapper}>
          {images ? renderImages(images) : null}
        </div>
      </main>
      <NextAndBack next={id_num} back={id_num}></NextAndBack>
    </div>
  );
}
