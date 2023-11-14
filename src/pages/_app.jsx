/* eslint-disable @next/next/next-script-for-ga */
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
        
        <script
          dangerouslySetInnerHTML={{
           __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2099037230463995');
fbq('track', 'PageView');`,
          }}
        />
        

        <noscript>
            <img height="1" width="1" style={{ display: 'none', visibility: 'hidden' }}
              src={`https://www.facebook.com/tr?id=2099037230463995&ev=PageView&noscript=1`}/>
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
