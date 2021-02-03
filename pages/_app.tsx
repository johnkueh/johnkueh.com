import { ChakraProvider, HStack } from "@chakra-ui/react";
import * as Fathom from 'fathom-client';
import Head from "next/head";
import { useRouter } from 'next/router';
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from 'react';
import "react-notion/src/styles.css";
import { SWRConfig } from "swr";
import Link from "../shared/Link";
import PageLayout from "../shared/PageLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('SPFEBIZE', {
      includedDomains: ['johnkueh.com', 'www.johnkueh.com'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <SWRConfig value={{
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }}>
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
    </SWRConfig>
  );
}

export default MyApp;
