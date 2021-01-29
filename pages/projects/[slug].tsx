import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { getPage, getProjects } from "../../shared/api";

export default function Project({ page, blockMap }) {
  return (
    <div>
      <Head>
        <title>Project - {page.Name}</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">{page.Name}</Heading>
      <Box height={3} />
      <Text>{page.Caption}</Text>
      <Box height={12} />
      <NotionRenderer blockMap={blockMap} />
    </div>
  );
}

export async function getStaticPaths() {
  const data = await getProjects();

  return {
    paths: data.map((project) => {
      return {
        params: { slug: project.Slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { page, blockMap } = await getPage(context.params.slug);

  return {
    props: {
      page,
      blockMap,
    },
  };
}
