import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";

const ListOfCards = ({ cards }) => {
  return (
    <div>
      {cards.map(({ id, title, caption, href }) => {
        return (
          <Link key={id} href={href} _hover={{ textDecoration: "none" }}>
            <Box height={3} />
            <Heading as="h3" size="md" color="blue.500">
              {title}
            </Heading>
            <Text color="gray.800">{caption}</Text>
            <Box height={3} />
          </Link>
        );
      })}
    </div>
  );
};

export default ListOfCards;
