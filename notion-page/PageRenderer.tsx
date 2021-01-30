import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { NotionRenderer } from "react-notion";
import Link from "../shared/Link";

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
            return <Link href={decoratorValue}>{children}</Link>;
          },
        }}
        customBlockComponents={{
          video: ({
            blockValue,
            blockValue: {
              properties: { caption, source },
            },
          }) => {
            return (
              <Box>
                <video width="400" controls>
                  <source src={source} type="video/mov" />
                </video>
                <div>
                  {caption} / {source}
                </div>
                <div>{JSON.stringify(blockValue)}</div>
              </Box>
            );
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
