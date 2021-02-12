import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { timeFromNow } from "../features/notion-page/time-from-now";
import { getArticles } from "../shared/api";
import Link from "../shared/Link";
import ListOfCards from "../shared/ListOfCards";
import PublicLayout from "../shared/PublicLayout";

dayjs.extend(relativeTime);

export default function Home({ articles }) {
  return (
    <PublicLayout>
      <Box height={12} />
      <Heading as="h1">Hey, I'm John</Heading>
      <Box height={3} />
      <Box maxW="lg">
        <Text>
          I am a software engineer and hobby chef 🍱, living in Sydney,
          Australia. Welcome to my tiny corner of creative freedom.
        </Text>
      </Box>
      <Box height={5} />
      <Box>
        <Link href="/about">More about me</Link>
      </Box>
      <Box height={12} />
      <Divider />
      <Box height={6} />
      <ListOfCards
        cards={articles.map((article) => ({
          id: article.id,
          title: article.Name,
          caption: article.Caption,
          date: `Updated ${timeFromNow(article.date)}`,
          href: `/blog/${article.Slug}`,
        }))}
      />
    </PublicLayout>
  );
}

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}
