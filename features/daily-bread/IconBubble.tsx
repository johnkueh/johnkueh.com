import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

const IconBubble = (props: FlexProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      boxSize="40px"
      rounded="full"
      bg="blue.400"
      border="white 2px solid"
      zIndex={100}
      {...props}
    />
  );
};

export default IconBubble;
