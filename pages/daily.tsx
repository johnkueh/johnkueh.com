import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Head from "next/head";
import React from "react";
import DailyBreadIcon from "../features/daily-bread/DailyBreadIcon";
import DailyBreadRenderer from "../features/daily-bread/DailyBreadRenderer";
import { getDailyBread } from "../shared/api";

dayjs.extend(relativeTime);

export default function Daily({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Daily Bread</title>
      </Head>
      <Box height={{ base: 5, md: 12, lg: 12, xl: 12 }} />
      <Heading as="h1">🍞 Daily Bread</Heading>

      <Box height={12} />
      {tableData.map(({ id, Name, createdTime, Type, blockMap }) => {
        return (
          <Flex key={id}>
            <Flex
              position="relative"
              justifyContent="center"
              flexBasis="40px"
              mr={10}
            >
              <DailyBreadIcon type={Type} />
              <Box
                position="absolute"
                width="1px"
                top={0}
                bottom={0}
                bg="gray.200"
                zIndex={1}
              />
            </Flex>
            <Box flex={1}>
              <Box>
                <Heading as="h2" fontSize="md">
                  {Name}
                </Heading>
              </Box>
              <Text color="gray.500" fontSize="sm">
                Updated {dayjs(createdTime).fromNow()}
              </Text>
              <Box height={3} />
              <DailyBreadRenderer blockMap={blockMap} />
              <Box height={3} />
              <Divider />
              <Box height={6} />
            </Box>
          </Flex>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await getDailyBread();

  return {
    props: {
      tableData: data,
    },
    revalidate: 60,
  };
}
