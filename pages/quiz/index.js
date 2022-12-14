import Quiz from "../../components/Quiz";
import { useEffect } from "react";

export default function QuizHome() {
  useEffect(() => {
    const body = document.querySelector("body");
    // Hide Overflow
    body.style.overflowY = "hidden";
  });

  return <Quiz />;
}
