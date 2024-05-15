import Head from "next/head";
import "../styles/globals.css";
import Provider from "../redux/provider";
import { Setup } from "../Components/utils";
//Internal import
import { StateContextProvider } from "../Context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="assets/images/favicon.png" />
        <title>CleverConvo</title>
      </Head>
      <Provider>
        <StateContextProvider>
          <Setup />
          <Component {...pageProps} />
        </StateContextProvider>
      </Provider>
      {/* // Import Scripts */}
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/custom-aos.js"></script>
      <script src="assets/js/home-animation.js"></script>
      <script src="assets/js/header_sticky.js"></script>
      <script src="assets/js/script.js"></script>
    </>
  );
}
