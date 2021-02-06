import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Head from "next/head";
import React from "react";
import DailyBreadRenderer from "../notion-page/DailyBreadRenderer";
import { getDailyBread } from "../shared/api";

dayjs.extend(relativeTime);

export default function Daily({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Daily Bread</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">🍞 Daily Bread</Heading>

      <Box height={12} />
      {tableData.map(({ id, Name, createdTime, Type, blockMap }) => {
        console.log(blockMap);
        return (
          <Box key={id}>
            <Box>
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
            </Box>
            <Divider />
            <Box height={6} />
          </Box>
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
