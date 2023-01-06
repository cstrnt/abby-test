import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AbbyProvider, withAbby } from "../src/abby";

function App({
  Component,
  pageProps: { __ABBY_PROJECT_DATA__, ...pageProps },
}: AppProps) {
  return (
    <AbbyProvider initialData={__ABBY_PROJECT_DATA__}>
      <Component {...pageProps} />
    </AbbyProvider>
  );
}

export default withAbby(App);
