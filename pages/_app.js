import "../styles/globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import mixpanel from 'mixpanel-browser';
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { Head } from "next/document";
import Script from 'next/script'

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
      <Head>
      <Script
        lazyOnload
        id="volument"
        src="https://cdn.volument.com/v1/volument.js"
        onLoad={() => {
          volument('bfd3d6fe44')
        }}
      />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
