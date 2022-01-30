import "../styles/globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import mixpanel from 'mixpanel-browser';
import { useEffect } from "react";
import { useRouter } from 'next/router'

export default App;

function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      mixpanel.init('7c58bcd2d5b3b2b95de1d92097a0ce05', {debug: true});
      mixpanel.track('Viewed Page', {
        page: `for/${router.pathname}`
      })
    }
  }, [])
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
