import "../styles/globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

export default App;

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      mixpanel.init("19a8c3eaf7bd6e3af529d073ff6b73db", {debug: true}); // the Local project on mixpanel
    } else {
      mixpanel.init("7c58bcd2d5b3b2b95de1d92097a0ce05", {debug: true}); // the Production project on mixpanel
    }

    if (router.pathname === '/') {
        mixpanel.track("Viewed Marketing Page - Homepage");
    } else if (router.pathname === '/about') {
        mixpanel.track("Viewed Marketing Page - About");
    } else if (router.pathname === '/rust') {
        mixpanel.track("Viewed Marketing Page - Rust");
    } else {
        mixpanel.track("Viewed Marketing Page - Unknown", { page: `${router.pathname}` });
    }

    let mixpanelDistinctId = mixpanel.get_distinct_id();

    // If a link takes the user to our app, let's append the mixpanel distinct id to the URL.
    document
      .querySelectorAll('a')
      .forEach((element) => {
        if (element.href && element.href.startsWith('https://app.codecrafters.io')) {
          element.href = element.href + '?t=' + mixpanelDistinctId;
        }
      });
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-136412486-2`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-136412486-2', {
          page_path: window.location.pathname,
        });
        `}
      </Script>

      <Script
        strategy="afterInteractive"
        id="hotjar"
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
          volument("bfd3d6fe44");
        }}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
