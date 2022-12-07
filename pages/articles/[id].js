import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import { useRouter } from "next/router";
import articles from "../../components/db/articles";
import NextAndBack from "../../components/NextAndBack";


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
  let images;
  let id_num;

  if (info) {
    id_num = info.id_num;
    title = info.title;
    content = info.content;
    images = info.images;
    console.log(images);
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
          <p className={styles.articleText}>{content}</p>
        </div>
        <div className={styles.imagesWrapper}>
          {images ? renderImages(images) : null}
        </div>
      </main>
      <NextAndBack next={id_num + 1} back={id_num - 1}></NextAndBack>
    </div>
  );
}
