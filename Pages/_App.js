// pages/_app.js
import Head from 'next/head'
// import '../static/css/styles.css'

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