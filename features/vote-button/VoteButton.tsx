import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { incrementVote, useVote } from "./data";

const VoteButton = ({ id }) => {
  const { data, mutate } = useVote(id);
  const count = data?.count ?? 0;

  return (
    <Flex
      justify="center"
      width="60px"
      py="1px"
      px="5px"
      rounded="md"
      bg="gray.100"
      align="center"
      onClick={async () => {
        const incrementedCount = count + 1;
        mutate({ id, count: incrementedCount }, false);
        await incrementVote(id, incrementedCount);
      }}
      as="button"
    >
      <Icon mr={1} as={AiFillLike} color="blue.500" />
      <Box>{count}</Box>
    </Flex>
  );
};

export default VoteButton;
