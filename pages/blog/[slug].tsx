import { Box, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import PageRenderer from "../../notion-page/PageRenderer";
import { getArticle, getArticles } from "../../shared/api";

export default function Article({ page, blockMap }) {
  const router = useRouter();
  if (router.isFallback) return <Spinner my={5} />;

  return (
    <Box>
      <Head>
        <title>{page.Name} | John Kueh</title>
      </Head>
      <PageRenderer page={page} blockMap={blockMap} />
    </Box>
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
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { page, blockMap } = await getArticle(context.params.slug);

  return {
    props: {
      page,
      blockMap,
    },
    revalidate: 60,
  };
}
