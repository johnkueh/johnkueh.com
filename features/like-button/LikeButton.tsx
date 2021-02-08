import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { incrementLike, useLike } from "./data";

const LikeButton = ({ id }) => {
  const { data, mutate, isValidating } = useLike(id);
  const count = data?.count ?? 0;

  return (
    <Flex
      align="center"
      onClick={async () => {
        const incrementedCount = count + 1;
        mutate({ id, count: incrementedCount }, false);
        await incrementLike(id, incrementedCount);
      }}
      as="button"
    >
      <Icon mr={1} as={AiFillHeart} color="red.500" />
      <Box>{!isValidating && count}</Box>
    </Flex>
  );
};

export default LikeButton;
