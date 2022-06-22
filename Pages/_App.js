// pages/_app.js
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import Head from 'next/head';
import '../public/static/styles.css';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="title" content="Dico IT"></meta>
        <meta name="description" content="Build your dream website"></meta>

        {/* Link  */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
