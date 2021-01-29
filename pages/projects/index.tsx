import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { getProjects } from "../../shared/api";
import ListOfCards from "../../shared/ListOfCards";

export default function Projects({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Projects</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">Projects</Heading>
      <Text>A list of everything I've worked on in the last few years.</Text>
      <Box height={6} />
      <ListOfCards
        cards={tableData.map((project) => ({
          id: project.id,
          title: project.Name,
          caption: project.Caption,
          href: `/projects/${project.Slug}`,
        }))}
      />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getProjects();

  return {
    props: {
      tableData: data,
    },
  };
}
