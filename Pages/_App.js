// pages/_app.js
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../public/static/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp