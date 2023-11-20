import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (    
    <Layout>
       <Head>
        <title>Factory</title>
        <link rel="manifest" href="/manifest.json" />
        {/* <meta name="theme-color" content="#06092B" /> */}
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
