import "../styles/globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import mixpanel from 'mixpanel-browser';
import { useEffect } from "react";
import { useRouter } from 'next/router'
import Head from 'next/head';
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
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${"UA-136412486-2"}');
            `,
          }}
        />

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1669472,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        <Script
          strategy="afterInteractive"
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
