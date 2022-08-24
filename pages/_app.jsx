import { GlobalStyle } from "../styles/global";
import Head from "next/head";

import { Wrapper } from "../components/Wrapper";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default MyApp;
