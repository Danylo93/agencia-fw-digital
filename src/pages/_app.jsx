import Head from "next/head";
import Script from "next/script";

import '../styles/globals.css'
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";


function MyApp({ Component, pageProps }) {
  

    
  return (
    <>
      <Head>
        <title>Agência FW Digital | Marketing & Desenvolvimento</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <>
        <script
          dangerouslySetInnerHTML={{
           __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XFB7CTQ');`,
          }}
        />
        </>

        <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-5XFB7CTQ`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
        
          
        
        
      </Head>

      <LoadingScreen />
      <Cursor />
      <Component {...pageProps} />
      <ScrollToTop />

      <Script id="wow" src="/assets/js/wow.min.js" />
      <Script id="charming" src="/assets/js/charming.min.js" />
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js" />
      <Script id="init" src="/assets/js/main.js" strategy="lazyOnload" />
      <Script id="simpleParallax" src="/assets/js/simpleParallax.min.js" strategy="beforeInteractive" />
      <Script id="splitting" src="/assets/js/splitting.min.js" strategy="beforeInteractive" />
      <Script id="bootstrap" src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
          
      


    </>
    
  )
}

export default MyApp;
