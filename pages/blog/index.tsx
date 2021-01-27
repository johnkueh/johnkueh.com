import Head from "next/head";
import { getArticles } from "../../shared/api";
import ListOfCards from "../../shared/ListOfCards";

export default function Blog({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog</h1>
      <ListOfCards
        cards={tableData.map((project) => ({
          title: project.Name,
          caption: project.Caption,
          href: `/blog/${project.Slug}`,
        }))}
      />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getArticles();

  return {
    props: {
      tableData: data,
    },
  };
}
