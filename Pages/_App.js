// pages/_app.js
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../public/static/styles.css'
import fav from '../public/dicoiticon.ico'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="title" content="Dico IT"></meta>
      <meta name="description" content="Build your dream website"></meta>
      <link rel="shortcut icon" href={fav} />


            {/* Link  */}
            
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
