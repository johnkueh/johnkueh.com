import { AspectRatio, Box } from "@chakra-ui/react";
import React from "react";
import { ContentValueType } from "react-notion";

const VideoRenderer = ({ blockValue }) => {
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
};

export default VideoRenderer;
