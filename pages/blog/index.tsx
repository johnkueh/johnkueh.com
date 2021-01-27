import Head from "next/head";
import Link from "next/link";
import { getArticles } from "../../shared/api";
import Card from "../../shared/Card";

export default function Blog({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog</h1>
      <div>
        {tableData.map(({ id, Name, Caption, Slug }) => {
          return (
            <Link key={id} href={`/blog/${Slug}`}>
              <a>
                <Card title={Name} caption={Caption} />
              </a>
            </Link>
          );
        })}
      </div>
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
