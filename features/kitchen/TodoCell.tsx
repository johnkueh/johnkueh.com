import { Box, Checkbox, Flex } from "@chakra-ui/react";
import { noop } from "lodash";
import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { Todo } from "../../shared/api";

interface TodoProps {
  isChecked?: boolean;
  todo: Todo;
  onClickVote: () => void;
}

const TodoCell = ({ todo, isChecked, onClickVote = noop }: TodoProps) => {
  return (
    <Flex py={1} key={todo.id}>
      <Box flexBasis="30px" pt={1}>
        <Checkbox
          isChecked={isChecked}
          pointerEvents="none"
          colorScheme="gray"
        />
      </Box>
      <Box flex={1}>
        <Box>{todo.Name}</Box>
        <Flex
          as="button"
          align="center"
          fontSize="sm"
          color="blue.500"
          onClick={onClickVote}
        >
          <FiArrowUp /> {todo.votes}
        </Flex>
      </Box>
    </Flex>
  );
};

export default TodoCell;
