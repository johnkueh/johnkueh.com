import { Box, Heading, Text } from "@chakra-ui/react";
import { getArticles } from "../shared/api";
import Link from "../shared/Link";
import ListOfCards from "../shared/ListOfCards";

export default function Home({ articles }) {
  return (
    <>
      <Box height={{ base: 5, md: 12, lg: 12, xl: 12 }} />
      <Heading as="h1">Hey, I'm John</Heading>
      <Box height={3} />
      <Box maxW="lg">
        <Text>
          I am a software engineer and hobby chef 🍱, living in Sydney,
          Australia. Welcome to my tiny little corner on the internet. Please
          keep an open mind - you are entering my creative freedom.
        </Text>
      </Box>
      <Box height={5} />
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
    revalidate: 60,
  };
}
