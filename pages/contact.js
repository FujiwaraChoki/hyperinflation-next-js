// Import useState
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Theme from "../components/Theme";

const sendEmail = (subject, text) => {
  alert("Sending email");
};

export default function Contact() {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(subject, text);
    setFrom("");
    setSubject("");
    setText("");
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
        <h1 className={styles.title}>Kontakt</h1>
        <br />
        <form onSubmit={handleSubmit} className={styles.emailDiv}>
          <label htmlFor="from">Von:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <br />
          <label htmlFor="subject">Betreff:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <input type="submit" value="Abschicken" />
        </form>
      </main>
    </div>
  );
}
