import { SessionProvider } from "next-auth/react";
import Layout from "@/components/layout/Layout.js";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
