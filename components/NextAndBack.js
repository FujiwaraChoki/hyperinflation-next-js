// Next Article and Back Button
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const getNextArticleName = (id) => {
    switch (id) {
        case 1:
            return "was-ist-eine-inflation";
        case 2:
            return "der-erste-weltkrieg";
        case 3:
            return "die-hyperinflation-von-1923";
        case 4:
            return "wie-loest-man-eine-hyperinflation";
        case 5:
            return "die-weimarer-republik";
        case 6:
            return "deutsche-mark";
        case 7:
            return "reichsmark";
        case 8:
            return "vergleich-zu-anderen-hyperinflationen";
        case 9:
            return "inflation-2022";
        case 10:
            return "deflation";
        case 11:
            return "QUIZ";
        default:
            return "";
    }
}

const getPreviousArticleName = (id) => {
    switch (id) {
        case 0:
            return "deflation";
        case 1:
            return "was-ist-eine-inflation";
        case 2:
            return "der-erste-weltkrieg";
        case 3:
            return "die-hyperinflation-von-1923";
        case 4:
            return "wie-loest-man-eine-hyperinflation";
        case 5:
            return "die-weimarer-republik";
        case 6:
            return "deutsche-mark";
        case 7:
            return "reichsmark";
        case 8:
            return "vergleich-zu-anderen-hyperinflationen";
        case 9:
            return "inflation-2022";
        default:
            return "";
    }
}


export default function NextAndBack({ next, back }) {

    const nextArticle = getNextArticleName(next);
    const backArticle = getPreviousArticleName(back);

    return (
        <div className={styles.nextAndBackButtons}>
            <Link href={backArticle}>
                <i className={`fas fa-arrow-left ${styles.backButton}`}></i>
            </Link>
            {
                next !== "" ? (
                    <Link href={nextArticle}>
                        <i className={`fas fa-arrow-right ${styles.nextButton}`}></i>
                    </Link>
                ) : null
            }
        </div>
    );
}