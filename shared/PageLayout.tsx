import { Box } from "@chakra-ui/react";

function PageLayout({ children }) {
  return (
    <Box
      width={{ sm: "100%", md: "680px", lg: "680px", xl: "680px" }}
      mx="auto"
      px={5}
    >
      {children}
    </Box>
  );
}

export default PageLayout;
