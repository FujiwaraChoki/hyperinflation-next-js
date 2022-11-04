import styles from "../styles/Home.module.css";

const Theme = () => {
  const enableDarkTheme = () => {
    document.body.style.background = "#000000";
    document.body.style.color = "#ffffff";
    document.body.style.transition = "0.3s";
  };

  // Method to disable dark theme
  const disableDarkTheme = () => {
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";
    document.body.style.transition = "0.3s";
  };
  // Color Scheme component
  return (
    <div id="change-theme-div">
      <button
        className={styles.themeButton}
        id={"dark-theme-button"}
        onClick={enableDarkTheme}
      >
        <span className={"fas fa-moon"}></span>
      </button>
      <button
        className={styles.themeButton}
        id={"light-theme-button"}
        onClick={disableDarkTheme}
      >
        <span className={"fas fa-sun"}></span>
      </button>
    </div>
  );
};

export default Theme;
