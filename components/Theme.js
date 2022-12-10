import styles from "../styles/Home.module.css";
import Image from "next/image";

const Theme = () => {
  const enableDarkTheme = () => {
    /*document.body.style.background = "#000000";
    document.body.style.color = "#ffffff";
    document.body.style.transition = "0.3s";*/
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  };

  // Method to disable dark theme
  const enableLightTheme = () => {
    /*document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";
    document.body.style.transition = "0.3s";*/
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  };
  // Color Scheme component
  return (
    <div id="change-theme-div">
      <button
        title="Dark Theme"
        className={styles.themeButton}
        id={"dark-theme-button"}
        onClick={enableDarkTheme}
      >
        <span className={"fas fa-moon"}></span>
      </button>
      <button
        title="Light Theme"
        className={styles.themeButton}
        id={"light-theme-button"}
        onClick={enableLightTheme}
      >
        <span className={"fas fa-sun"}></span>
      </button>
      <div>
        <button
          title="GitHub Repository"
          className={styles.themeButton}
          onClick={() => {
            window.open(
              "https://github.com/FujiwaraChoki/hyperinflation-next-js",
              "_blank"
            );
          }}
        >
          <span className={"fab fa-github"}></span>
        </button>
      </div>
      <Image
        title="Ben Brändle"
        src={"https://avatars.githubusercontent.com/u/89217401?v=4"}
        alt="Ben Brändle"
        width={50}
        height={50}
        className={styles.themeButton}
        onClick={() => {
          window.open("https://github.com/BWizard06", "_blank");
        }}
      />
      <Image
        title="Sami Hindi"
        src={"https://avatars.githubusercontent.com/u/78088687?v=4"}
        alt="Sami Hindi"
        width={50}
        height={50}
        className={styles.themeButton}
        onClick={() => {
          window.open("https://samihindi.com", "_blank");
        }}
      />
    </div>
  );
};

export default Theme;
