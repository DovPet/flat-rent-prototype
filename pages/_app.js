import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </AnimatePresence>
  );
}

export default MyApp;
