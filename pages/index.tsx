import { Box, Heading, Text } from "@chakra-ui/react";
import { getArticles } from "../shared/api";
import Link from "../shared/Link";
import ListOfCards from "../shared/ListOfCards";

export default function Home({ articles }) {
  return (
    <>
      <Box height={12} />
      <Heading as="h1">Hey, I'm John</Heading>
      <Text>
        A software engineer 🖥 and hobby chef 🍱, living in Sydney, Australia.
        I'm currently building mindful moments on the web at Insight Timer.
      </Text>
      <Box height={2} />
      <Box>
        <Link href="/about">More about me</Link>
      </Box>
      <Box height={12} />
      <ListOfCards
        cards={articles.map((article) => ({
          id: article.id,
          title: article.Name,
          caption: article.Caption,
          href: `/blog/${article.Slug}`,
        }))}
      />
    </>
  );
}

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
}
