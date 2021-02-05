import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { getDailyBread } from "../shared/api";

export default function Daily({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Daily Bread</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">🍞 Daily Bread</Heading>

      <Box height={12} />
      {tableData.map(({ id, Name, Type }) => {
        return (
          <Box key={id}>
            <Heading size="sm" as="h3">
              {Name}
            </Heading>
            <Text color="gray.500" size="sm" as="h4">
              {Type}
            </Text>
            <Box height={3} />
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
