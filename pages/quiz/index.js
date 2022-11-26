import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Theme from "../../components/Theme";
import Lottie from "react-lottie";
import animationData from "../../public/quizAnimation.json";
import Quiz from "../../components/Quiz";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Quiz />;
}
