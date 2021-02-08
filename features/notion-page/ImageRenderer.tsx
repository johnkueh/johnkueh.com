import { Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import { ContentValueType } from "react-notion";

const ImageRenderer = ({ blockValue }) => {
  const { format } = blockValue as ContentValueType;
  const src = `https://www.notion.so/image/${encodeURIComponent(
    format?.display_source
  )}?table=block&id=${blockValue.id}&cache=v2`;
  const width = format?.block_width * 2;
  const caption = blockValue.properties?.caption?.[0];

  return (
    <>
      <NextImage
        width={width}
        height={width * format?.block_aspect_ratio}
        src={src}
      />
      {caption && (
        <Text color="gray.500" fontSize="sm">
          {caption}
        </Text>
      )}
    </>
  );
};

export default ImageRenderer;
