// Quiz für die Hyperinflation
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "./Nav";
import Theme from "./Theme";
import Lottie from "react-lottie";
import animationData from "../public/quizAnimation.json";

export default function Quiz() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const questions = [
    {
      questionText: "Was war der Haupt-Auslöser für die Hyperinflation?",
      answerOptions: [
        { answerText: "Versailler Vertrag", isCorrect: false },
        { answerText: "Weimarer Republik", isCorrect: false },
        { answerText: "Einmarschierung ins Ruhrgebiet", isCorrect: true },
        { answerText: "Hypotheken", isCorrect: false },
      ],
    },
    {
      questionText: "Wie viele Milliarden Mark kostete ein Liter Milch 1923?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "100", isCorrect: false },
        { answerText: "1000", isCorrect: true },
        { answerText: "10000", isCorrect: false },
      ],
    },
    {
      questionText: "Wie viele Milliarden Mark kostete ein Liter Benzin 1923?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "100", isCorrect: false },
        { answerText: "1000", isCorrect: true },
        { answerText: "10000", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
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
      <Nav />
      <Theme />
      <main className={styles.main}>
        <h1 className={styles.title}>Hyperinflation's Quiz</h1>
        <br />
        <p className={styles.description}>
          Teste dein Wissen über die Hyperinflation von 1923. Wie gut kennst du
          die Geschichte?
        </p>
        <br />
        <Lottie options={defaultOptions} height={200} width={200} />
        <br />
        <div className={styles.app}>
          {showScore ? (
            <div className={styles.scoresection}>
              Du hast {score} von {questions.length} Fragen richtig beantwortet.
            </div>
          ) : (
            <>
              <div className={styles.questionsection}>
                <div className={styles.questioncount}>
                  <span>Frage {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className={styles.questiontext}>
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className={styles.answersection}>
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className={styles.answerbutton}
                      onClick={() =>
                        handleAnswerButtonClick(answerOption.isCorrect)
                      }
                      key={answerOption.answerText}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
