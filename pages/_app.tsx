import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AbbyDevTools, AbbyProvider, withAbby } from "../src/abby";

function App({
  Component,
  pageProps: { __ABBY_PROJECT_DATA__, ...pageProps },
}: AppProps) {
  return (
    <AbbyProvider initialData={__ABBY_PROJECT_DATA__}>
      <AbbyDevTools />
      <Component {...pageProps} />
    </AbbyProvider>
  );
}

export default withAbby(App);
