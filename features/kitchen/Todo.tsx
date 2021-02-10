import { Box, Checkbox, Flex } from "@chakra-ui/react";
import React from "react";
import VoteButton from "../vote-button/VoteButton";

interface TodoProps {
  isChecked?: boolean;
  todo: any;
}

const Todo = ({ todo, isChecked }: TodoProps) => {
  return (
    <Flex py={1} key={todo.id}>
      <Box flexBasis="30px">
        <VoteButton id={todo.id} />
      </Box>
      <Box flexBasis="15px" />
      <Box flexBasis="30px" pt={1}>
        <Checkbox
          isChecked={isChecked}
          pointerEvents="none"
          colorScheme="gray"
        />
      </Box>
      <Box flex={1}>{todo.Name}</Box>
    </Flex>
  );
};

export default Todo;
