import { Box, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ListOfCards = ({ cards }) => {
  return (
    <div>
      {cards.map(({ id, title, caption, href }) => {
        return (
          <Link key={id} href={href}>
            <ChakraLink _hover={{ textDecoration: "none" }}>
              <Box height={3} />
              <Heading as="h3" size="md" color="blue.500">
                {title}
              </Heading>
              <Text>{caption}</Text>
              <Box height={3} />
            </ChakraLink>
          </Link>
        );
      })}
    </div>
  );
};

export default ListOfCards;
