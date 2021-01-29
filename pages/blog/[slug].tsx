import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { getArticle, getArticles } from "../../shared/api";

export default function Article({ page, blockMap }) {
  return (
    <div>
      <Head>
        <title>Blog - {page.Name}</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">{page.Name}</Heading>
      <Box height={3} />
      <Text>{page.Caption}</Text>
      <Box height={12} />
      <NotionRenderer
        blockMap={blockMap}
        customBlockComponents={{
          video: ({
            blockValue,
            blockValue: {
              properties: { caption, source },
            },
          }) => {
            return (
              <div>
                <video width="400" controls>
                  <source src={source} type="video/mov" />
                </video>
                <div>
                  {caption} / {source}
                </div>
                <div>{JSON.stringify(blockValue)}</div>
              </div>
            );
          },
        }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const data = await getArticles();

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
  const { page, blockMap } = await getArticle(context.params.slug);

  return {
    props: {
      page,
      blockMap,
    },
  };
}
