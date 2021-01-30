import { Box, Heading, Text } from "@chakra-ui/react";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import Link from "../shared/Link";

const PageRenderer = ({ page, blockMap }) => {
  return (
    <>
      <Box height={12} />
      <Heading as="h1">{page.Name}</Heading>
      <Box height={3} />
      <Text>{page.Caption}</Text>
      <Box height={12} />
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
              <div>
                <video width="400" controls>
                  <source src={source} type="video/mov" />
                </video>
                <div>
                  {caption} / {source}
                </div>
                <div>{JSON.stringify(blockValue)}</div>
              </div>
            );
          },
        }}
      />
    </>
  );
};

export default PageRenderer;
