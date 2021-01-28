import Head from "next/head";
import Link from "next/link";
import { getArticles } from "../shared/api";
import ListOfCards from "../shared/ListOfCards";

export default function Home({ projects, articles }) {
  return (
    <div>
      <Head>
        <title>John Kueh</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </Head>
      <h1>Hey, I'm John</h1>
      <p>
        I'm a software engineer and hobby chef, living in Sydney. I'm currently
        building mindful moments on the web at Insight Timer.
      </p>
      <div>
        <Link href="/about">
          <a>More about me</a>
        </Link>
      </div>
      <ListOfCards
        cards={articles.map((article) => ({
          title: article.Name,
          caption: article.Caption,
          href: `/blog/${article.Slug}`,
        }))}
      />
    </div>
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
