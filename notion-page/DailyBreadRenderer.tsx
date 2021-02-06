import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { compact } from "lodash";
import get from "lodash/get";

const DailyBreadRenderer = ({ blockMap }) => {
  const { textBlocks, imageBlocks } = parseBlocks(blockMap);
  console.log(textBlocks);
  return (
    <Box>
      {textBlocks.map(({ id, text }) => {
        return (
          <Text id={id} whiteSpace="pre-wrap">
            {text}
          </Text>
        );
      })}
      <Box height={3} />
      <Flex flexWrap="wrap">
        {imageBlocks.map(({ id, src, caption }) => {
          const aspectRatio = 16 / 9;
          const width = 290;
          const height = width / aspectRatio;
          return (
            <Box>
              <Img
                mr={7}
                rounded="xl"
                objectFit="cover"
                width={width}
                height={height}
                id={id}
                src={src}
              />
              <Flex height="28px" alignItems="center">
                <Text isTruncated fontSize="xs" color="gray.500">
                  {caption}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

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
