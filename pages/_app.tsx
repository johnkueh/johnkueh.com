import { ChakraProvider, HStack } from "@chakra-ui/react";
import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion/src/styles.css";
import Link from "../shared/Link";
import PageLayout from "../shared/PageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>John Kueh</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </Head>
      <PageLayout>
        <HStack py={3}>
          <Link href="/">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </HStack>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
}

export default MyApp;
