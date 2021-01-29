import Link from "next/link";
import { getArticles } from "../shared/api";
import ListOfCards from "../shared/ListOfCards";

export default function Home({ articles }) {
  return (
    <div>
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
          id: article.id,
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
