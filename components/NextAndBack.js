// Next Article and Back Button
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import articles from "./db/articles.js";

const getNextArticleName = (id) => {
  const nextArticle = articles.find((article) => article.id_num === id + 1);
  if (nextArticle === undefined) {
    return "https://hyperinflation-next-js.vercel.app/quiz";
  } else {
    return nextArticle.id;
  }
};

const getPreviousArticleName = (id) => {
  const previousArticle = articles.find((article) => article.id_num === id - 1);
  if (previousArticle === undefined) {
    return "https://hyperinflation-next-js.vercel.app/articles";
  } else {
    return previousArticle.id;
  }
};

export default function NextAndBack({ next, back }) {
  const nextArticle = getNextArticleName(next);
  const backArticle = getPreviousArticleName(back);

  return (
    <div className={styles.nextAndBackButtons}>
      <Link href={backArticle}>
        <i className={`fas fa-arrow-left ${styles.backButton}`}></i>
      </Link>
      {next !== "" ? (
        <Link href={nextArticle}>
          <i className={`fas fa-arrow-right ${styles.nextButton}`}></i>
        </Link>
      ) : null}
    </div>
  );
}
