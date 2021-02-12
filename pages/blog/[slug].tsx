import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LikeButton from "../../features/like-button/LikeButton";
import PageRenderer from "../../features/notion-page/PageRenderer";
import { timeFromNow } from "../../features/notion-page/time-from-now";
import { getArticle, getArticles } from "../../shared/api";
import PublicLayout from "../../shared/PublicLayout";

dayjs.extend(relativeTime);

export default function Article({ page, blockMap }) {
  const router = useRouter();
  if (router.isFallback) return <Spinner my={5} />;

  return (
    <PublicLayout>
      <Head>
        <title>{page.Name} | John Kueh</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">{page.Name}</Heading>
      <Box height={1} />
      <Flex alignItems="center" color="gray.500">
        <LikeButton id={page.id} />
        <Box mx={2}>/</Box>
        <Text>{`Updated ${timeFromNow(page.Date)}`}</Text>
      </Flex>
      <Box height={3} />
      <PageRenderer page={page} blockMap={blockMap} />
      <Box height={12} />
    </PublicLayout>
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
