import '../styles/globals.css'
import theme from "../src/theme/theme.js";
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Test</title>
      <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
    />
    <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
      type="text/css"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css"
      type="text/css"
      media="screen"
    />
    <link
      href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    </Head>
    <ChakraProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}

export default MyApp
