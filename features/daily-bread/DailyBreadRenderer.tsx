import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { compact } from "lodash";
import get from "lodash/get";
import NextImage from "next/image";

const DailyBreadRenderer = ({ blockMap }) => {
  const { textBlocks, imageBlocks } = parseBlocks(blockMap);
  return (
    <Box>
      {textBlocks.map(({ id, text }) => {
        return (
          <Text minHeight="10px" id={id} whiteSpace="pre-wrap">
            {text}
          </Text>
        );
      })}
      <Box height={3} />
      <Wrap spacing={2} align="center">
        {imageBlocks.map(({ id, src, caption }) => {
          return (
            <WrapItem
              id={id}
              position="relative"
              boxSize={{
                base: "130px",
                md: "270px",
                lg: "270px",
              }}
            >
              <Image
                objectFit="cover"
                alt={caption}
                width={500}
                height={500}
                src={src}
              />
            </WrapItem>
          );
        })}
      </Wrap>
      <Box height={6} />
    </Box>
  );
};

const Image = styled(NextImage)`
  border-radius: 5px;
`;

function parseBlocks(blockMap) {
  const blocks = Object.values(blockMap);
  const textBlocks = compact(
    blocks
      .filter((entry: any) => entry.value.type === "text")
      .map((entry: any) => {
        return {
          id: entry.value.id,
          text: get(entry, "value.properties.title[0][0]"),
        };
      })
  );
  const imageBlocks = compact(
    blocks
      .filter((entry: any) => entry.value.type === "image")
      .map((entry: any) => {
        const id = entry.value.id;
        const imageUrl = encodeURIComponent(entry.value.properties.source[0]);
        return {
          id,
          caption: get(entry, "value.properties.caption[0][0]"),
          src: `https://www.notion.so/image/${imageUrl}?table=block&id=${id}&cache=v2`,
        };
      })
  );
  return {
    textBlocks,
    imageBlocks,
  };
}

export default DailyBreadRenderer;
