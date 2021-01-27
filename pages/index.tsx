import Head from "next/head";
import Link from "next/link";
import { getArticles, getProjects } from "../shared/api";
import LetsBuildSomethingTogether from "../shared/LetsBuildSomethingTogether";
import ListOfCards from "../shared/ListOfCards";

export default function Home({ projects, articles }) {
  return (
    <div>
      <Head>
        <title>John Kueh - React and TypeScript Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>John Kueh</h1>
      <p>
        👋 I'm a JavaScript engineer living in Sydney, Australia. I love
        creating useful products using React and Node.
      </p>
      <div>
        <Link href="/about">
          <a>More about me</a>
        </Link>
      </div>
      <h2>Blog</h2>
      <p>I write about my observations in life and things I love doing.</p>
      <div>
        <Link href="/blog">
          <a>View all</a>
        </Link>
      </div>
      <ListOfCards
        cards={articles.map((article) => ({
          title: article.Name,
          caption: article.Caption,
          href: `/blog/${article.Slug}`,
        }))}
      />
      <h2>My work</h2>
      <p>
        Here's a small selection of my latest work. They range from small tools
        to software for large companies.
      </p>
      <div>
        <Link href="/work">
          <a>View all</a>
        </Link>
      </div>
      <ListOfCards
        cards={projects.map((project) => ({
          title: project.Name,
          caption: project.Caption,
          href: `/work/${project.Slug}`,
        }))}
      />
      <LetsBuildSomethingTogether />
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  const articles = await getArticles();

  return {
    props: {
      projects,
      articles,
    },
  };
}
