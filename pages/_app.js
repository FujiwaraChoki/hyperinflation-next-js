import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    if(document.body.classList.contains("light-theme")) {
      document.body.classList.remove("light-theme");
    }
    document.body.classList.add("dark-theme");
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
