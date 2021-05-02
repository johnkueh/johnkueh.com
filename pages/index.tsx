import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SubscribeForm from "../features/bread-delivery/SubscribeForm";
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
          I'm a software engineer 🤓 &nbsp;and home chef 🍱, living in Sydney,
          Australia. Writing is an elusive skill - I am trying to get better at
          it.
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
          date: `Updated ${timeFromNow(article.Date)}`,
          href: `/blog/${article.Slug}`,
        }))}
      />
      <Box height={12} />
      <SubscribeForm />
      <Box height={12} />
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
