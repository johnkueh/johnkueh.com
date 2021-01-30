import { AspectRatio, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { ContentValueType, NotionRenderer } from "react-notion";
import Link from "../shared/Link";
import BlogLink from "./BlogLink";
import { isValidHttpUrl } from "./is-valid-url";

const PageRenderer = ({ page, blockMap }) => {
  return (
    <>
      <Box height={12} />
      <Heading as="h1">{page.Name}</Heading>
      <Box height={3} />
      <Text color="gray.500">{page.Caption}</Text>
      <Box height={3} />
      <NotionRenderer
        blockMap={blockMap}
        customDecoratorComponents={{
          a: ({ decoratorValue, children }) => {
            const isUrl = isValidHttpUrl(decoratorValue);
            if (isUrl) {
              return <Link href={decoratorValue}>{children}</Link>;
            } else {
              return <BlogLink path={decoratorValue}>{children}</BlogLink>;
            }
          },
        }}
        customBlockComponents={{
          video: ({ blockValue }) => {
            const { format } = blockValue as ContentValueType;
            if (format) {
              return (
                <Box>
                  <AspectRatio
                    maxW={format.block_width}
                    ratio={1 / format.block_aspect_ratio}
                  >
                    <iframe
                      src={`${format.display_source}&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&fs=0`}
                      frameBorder="0"
                    />
                  </AspectRatio>
                </Box>
              );
            }
          },
        }}
      />
      <style jsx global>{`
        div :global(.notion-list li) {
          padding: 2px 0px;
        }
      `}</style>
      <Box height={12} />
    </>
  );
};

export default PageRenderer;
