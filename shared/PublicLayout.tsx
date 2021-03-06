import { HStack } from "@chakra-ui/react";
import "nprogress/nprogress.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion/src/styles.css";
import Link from "../shared/Link";

function PublicLayout({ children }) {
  return (
    <>
      <HStack py={3} spacing={6}>
        <Link href="/">Writing</Link>
        <Link href="/changelog">Changelog</Link>
        <Link href="/about">About</Link>
      </HStack>
      {children}
    </>
  );
}

export default PublicLayout;
