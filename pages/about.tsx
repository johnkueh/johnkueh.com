import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { getTestimonials } from "../shared/api";
import Link from "../shared/Link";

export default function About({ tableData }) {
  return (
    <div>
      <Head>
        <title>About John Kueh</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">About John Kueh</Heading>
      <Box height={6} />
      <Text>
        My love for software started 10 years ago. Lately, I prefer to build
        with TypeScript and React. I'm currently contributing as a software
        engineer at <Link href="https://insighttimer.com">Insight Timer</Link>
      </Text>
      <Box height={6} />
      <Text>
        Outside work, I love cooking and hosting dinner parties at home. I share
        these experiences a lot on my blog.
      </Text>
      <Box height={6} />
      <Text>
        Please follow and connect with me on{" "}
        <Link href="https://twitter.com/johnkueh">Twitter</Link> (DMs are open),
        or check out my work on{" "}
        <Link href="https://github.com/johnkueh">GitHub</Link>
      </Text>

      <Box height={12} />
      <Heading size="md" as="h2">
        What people say
      </Heading>
      <Box height={6} />
      {tableData.map(({ id, Name, Position, Comment }) => {
        return (
          <Box key={id}>
            <Heading size="sm" as="h3">
              {Name}
            </Heading>
            <Text color="gray.500" size="sm" as="h4">
              {Position}
            </Text>
            <Box height={3} />
            <Text>{Comment}</Text>
            <Box height={6} />
            <Divider />
            <Box height={6} />
          </Box>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await getTestimonials();

  return {
    props: {
      tableData: data,
    },
    revalidate: 60,
  };
}
